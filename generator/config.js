const moduleName = {
  authentication: 'Authentication'
}
const generatorConfig = {
  newProjectPath: 'D://generatedReactProjects',
  module: [
    moduleName.authentication
  ],
  newProjectName: 'testGenerator',
  listCopyDir: [
    'config', 'public', 'scripts', 'src'
  ],
  listCopyFile: [
    'package.json', 'tsconfig.json', '.gitignore'
  ]
}

module.exports = generatorConfig