const features = require('./modules')
const generatorConfig = {
  newProjectPath: 'D://generatedReactProjects',
  newProjectName: 'mycrawler',
  features,
  sourcePath: 'src',
  listCopyFile: [
    'config', 'public', 'scripts', 'package.json', 'tsconfig.json', '.gitignore'
  ],
  lsSourceFolder: [
    'actions', 'apis', 'actionTypes',
    'appRoutes', 'components', 'constants',
    'containers', 'customMiddleware', 'reducers',
    'sagas', 'store', 'test', 'data'
  ]
}
module.exports = generatorConfig
