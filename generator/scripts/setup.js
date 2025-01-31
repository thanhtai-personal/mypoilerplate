
const shell = require('shelljs')
const { exec } = require('child_process')
const readline = require('readline')
const compareVersions = require('compare-versions')
const chalk = require('chalk')

const animateProgress = require('../helpers/progress')
const addCheckMark = require('../helpers/checkmark')
const addXMark = require('../helpers/xmark')
const npmConfig = require('../helpers/get-npm-config')
const generatorConfig = require('../config')

process.stdin.resume()
process.stdin.setEncoding('utf8')

process.stdout.write('\n')
let interval = -1

const boilerPlateSourcePath = __dirname.replace(/(generator\\scripts)|(generator\/scripts)|(generator\\scripts\\)|(generator\/scripts\/)/, '')

/**
 * createNewDirectory
 */
function createNewDirectory () {
  shell.cd(generatorConfig.newProjectPath)
  shell.mkdir(generatorConfig.newProjectName)
  shell.cd(generatorConfig.newProjectName)
  shell.mkdir(generatorConfig.sourcePath)
  shell.cd(generatorConfig.sourcePath)
  generatorConfig.lsSourceFolder.forEach((dirName) => {
    shell.mkdir(dirName)
  })
  shell.cd(boilerPlateSourcePath)
  return `${generatorConfig.newProjectPath}/${generatorConfig.newProjectName}`
}

/**
 * Report the the given error and exits the setup
 * @param {string} error
 */
function reportError(error) {
  clearInterval(interval)

  if (error) {
    process.stdout.write('\n\n')
    addXMark(() => process.stderr.write(chalk.red(` ${error}\n`)))
    process.exit(1)
  }
}

/**
 * Check Node.js version
 * @param {!number} minimalNodeVersion
 * @returns {Promise<any>}
 */
function checkNodeVersion(minimalNodeVersion) {
  return new Promise((resolve, reject) => {
    exec('node --version', (err, stdout) => {
      const nodeVersion = stdout.trim()
      if (err) {
        reject(new Error(err))
      } else if (compareVersions(nodeVersion, minimalNodeVersion) === -1) {
        reject(
          new Error(
            `You need Node.js v${minimalNodeVersion} or above but you have v${nodeVersion}`,
          ),
        )
      }

      resolve('Node version OK')
    })
  })
}

/**
 * Check NPM version
 * @param {!number} minimalNpmVersion
 * @returns {Promise<any>}
 */
function checkNpmVersion(minimalNpmVersion) {
  return new Promise((resolve, reject) => {
    exec('npm --version', (err, stdout) => {
      const npmVersion = stdout.trim()
      if (err) {
        reject(new Error(err))
      } else if (compareVersions(npmVersion, minimalNpmVersion) === -1) {
        reject(
          new Error(
            `You need NPM v${minimalNpmVersion} or above but you have v${npmVersion}`,
          ),
        )
      }

      resolve('NPM version OK')
    })
  })
}

/**
 * Install all packages
 * @returns {Promise<any>}
 */
function installPackages() {
  return new Promise((resolve, reject) => {
    process.stdout.write(
      '\nInstalling dependencies... (This might take a while)',
    )

    setTimeout(() => {
      readline.cursorTo(process.stdout, 0)
      interval = animateProgress('Installing dependencies')
    }, 500)

    exec('npm install', err => {
      if (err) {
        reject(new Error(err))
      }

      clearInterval(interval)
      addCheckMark()
      resolve('Packages installed')
    })
  })
}

/**
 * Initialize a new Git repository
 * @returns {Promise<any>}
 */
function initGitRepository() {
  return new Promise((resolve, reject) => {
    exec('git init', (err, stdout) => {
      if (err) {
        reject(new Error(err))
      } else {
        resolve(stdout)
      }
    })
  })
}

/**
 * Add all files to the new repository
 * @returns {Promise<any>}
 */
function addToGitRepository() {
  return new Promise((resolve, reject) => {
    exec('git add .', (err, stdout) => {
      if (err) {
        reject(new Error(err))
      } else {
        resolve(stdout)
      }
    })
  })
}

/**
 * Initial Git commit
 * @returns {Promise<any>}
 */
function commitToGitRepository() {
  return new Promise((resolve, reject) => {
    exec('git commit -m "Initial commit"', (err, stdout) => {
      if (err) {
        reject(new Error(err))
      } else {
        resolve(stdout)
      }
    })
  })
}


/**
 * make new repo
 * @returns {Promise<any>}
 */
async function makeNewRepo () {
  process.stdout.write('\n')
  interval = animateProgress('Initialising new repository')
  process.stdout.write('Initialising new repository')

  try {
    await initGitRepository()
    await addToGitRepository()
    await commitToGitRepository()
  } catch (err) {
    reportError(err)
  }

  addCheckMark()
  clearInterval(interval)
}

async function copyFile(filePath, desPath) {
  if (filePath.indexOf('.') > -1) {
    shell.cp(`${boilerPlateSourcePath}/${filePath}`, `${desPath}/`)
  } else {
    shell.cp('-R', `${boilerPlateSourcePath}/${filePath}/`, `${desPath}/`)
  }
}


/**
 * copy feature source
 */
async function copyAFeatureSource(name, feature, desPath) {
  process.stdout.write(`\nCopying ${name} feature...\n`)

  Object.keys(feature).forEach((key) => {
    process.stdout.write(`\nCopying ${key}...\n`)
    if (key === '_files') {
      feature[key].forEach((fileName) => {
        process.stdout.write(`\nCopy file ${generatorConfig.sourcePath}/${key}/${fileName}...\n`)
        copyFile(`${generatorConfig.sourcePath}/${fileName}`, `${desPath}/${generatorConfig.sourcePath}`)
        process.stdout.write(`\nDone copy file ${generatorConfig.sourcePath}/${key}/${fileName}...\n`)
      })
    } else {
      feature[key].forEach((fileName) => {
        process.stdout.write(`\nCopy file ${generatorConfig.sourcePath}/${key}/${fileName}...\n`)
        copyFile(`${generatorConfig.sourcePath}/${key}/${fileName}`, `${desPath}/${generatorConfig.sourcePath}/${key}`)
        process.stdout.write(`\nDone copy file ${generatorConfig.sourcePath}/${key}/${fileName}...\n`)
      })
    }
    process.stdout.write(`\nDone copying ${key}.\n`)
  })

  process.stdout.write(`Done copying ${name} feature.\n`)
}

/**
 * copy default source
 */
async function copyDefaultSource(destinationPath) {
  process.stdout.write('\nCopying default source...')
  generatorConfig.listCopyFile.forEach(filePath => {
    process.stdout.write(`\nCopying ${filePath}...\n`)
    copyFile(`${filePath}`, destinationPath)
    process.stdout.write(`Done copying ${filePath}.\n`)
  })
  process.stdout.write('Done copying default source.\n')
}

async function copyFeaturesSource(destinationPath) {
  process.stdout.write('\nCopying features...')

  Object.keys(generatorConfig.features).forEach(async (key) => {
    await copyAFeatureSource(key, generatorConfig.features[key], destinationPath)
  })
  
  process.stdout.write('Done copying features.\n')
}

/**
 * Copy data
 */
async function copyData(destinationPath) {
  process.stdout.write('\nCopying data...')
  
  await copyDefaultSource(destinationPath)

  await copyFeaturesSource(destinationPath)

  process.stdout.write('Done copy data.\n')
}

/**
 * End the setup process
 */
function endProcess(directory) {
  clearInterval(interval)
  process.stdout.write('\n')
  process.stdout.write(`Get your new source in ${directory}\n`)
  process.stdout.write(`Use 'git remote set-url origin <<your git url>>' connect your git repository.\n`)
  process.stdout.write(`Remove shelljs, child_process, readline, compare-versions, chalk in your package.json to clean your unuse package.\n`)
  process.stdout.write('\n')
  process.stdout.write(chalk.blue('\n\nDone!\n'))
  process.exit(0)
}


/**
 * Run
 */
(async () => {
  // Take the required Node and NPM version from package.json
  const {
    engines: { node, npm },
  } = npmConfig

  const requiredNodeVersion = node.match(/([0-9.]+)/g)[0]
  await checkNodeVersion(requiredNodeVersion).catch(reason =>
    reportError(reason),
  )

  const requiredNpmVersion = npm.match(/([0-9.]+)/g)[0]
  await checkNpmVersion(requiredNpmVersion).catch(reason =>
    reportError(reason),
  )
  const directory = createNewDirectory()
  if (directory) {
    process.stdout.write(`Move pointer to ${boilerPlateSourcePath}\n`)
    shell.cd(boilerPlateSourcePath)
    process.stdout.write(`Copy data from ${boilerPlateSourcePath} to ${directory}`)
    process.stdout.write('\n')
    await copyData(directory)
    
    process.stdout.write(`Move pointer to ${directory}\n`)
    shell.cd(directory)
    await installPackages().catch(reason => reportError(reason))
    await makeNewRepo().catch(reason => reportError(reason))
    process.stdout.write(`Move pointer to ${boilerPlateSourcePath}\n`)
    shell.cd(boilerPlateSourcePath)
  }
  endProcess(directory)
})()