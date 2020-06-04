const features = require('./modules')
const { authenFeature } = features
const generatorConfig = {
  newProjectPath: 'D://generatedReactProjects',
  newProjectName: 'testGenerator',
  listFeatures: [
    authenFeature
  ],
  defaultSource: {
    apis: ['devConfig.js', 'index.js', 'prodConfig.js'],
    components: ['layouts', 'AppRoutes.jsx'],
    containers: ['home'],
    customMiddleware: ['index.js'],
    reducers: ['index.js'],
    sagas: ['index.js'],
    store: ['index.js', 'store.dev.js','store.prod.js'],
    files: ['App.css', 'index.css', 'index.jsx', 'logo.svg', 'react-app-env.d.ts', 'serviceWorker.ts', 'setupTests.ts'],
    constants: ['css', 'languages', 'utilities', 'constants.js'],
    actionTypes: ['index.js'],
    appRoutes: ['index.js'],
  },
  sourcePath: 'src',
  listCopyFile: [
    'config', 'public', 'scripts', 'package.json', 'tsconfig.json', '.gitignore'
  ]
}

module.exports = generatorConfig