const features = require('./modules')
const generatorConfig = {
  newProjectPath: 'D://generatedReactProjects',
  newProjectName: 'testGenerator',
  features,
  defaultSource: {
    apis: ['devConfig.js', 'index.js', 'prodConfig.js'],
    components: ['layouts', 'AppRoutes.jsx'],
    containers: ['home'],
    customMiddleware: ['index.js'],
    reducers: ['index.js'],
    sagas: ['index.js'],
    store: ['index.js', 'store.dev.js','store.prod.js'],
    _files: ['App.css', 'index.css', 'index.jsx', 'logo.svg', 'react-app-env.d.ts', 'serviceWorker.ts', 'setupTests.ts'],
    constants: ['css', 'languages', 'utilities', 'constants.js'],
    actionTypes: ['index.js'],
    appRoutes: ['index.js'],
  },
  sourcePath: 'src',
  listCopyFile: [
    'config', 'public', 'scripts', 'package.json', 'tsconfig.json', '.gitignore'
  ],
  lsSourceFolder: [
    'actions', 'apis', 'actionTypes',
    'appRoutes', 'components', 'constants',
    'containers', 'customMiddleware', 'reducers',
    'sagas', 'store', 'test'
  ]
}
module.exports = generatorConfig
