const defaultModule = {
  apis: ['devConfig.js', 'index.js', 'prodConfig.js'],
  components: ['layouts', 'AppRoutes.jsx', 'commons'],
  containers: ['home'],
  customMiddleware: ['index.js', 'multiThemeWrapper.jsx'],
  reducers: ['index.js'],
  sagas: ['index.js'],
  store: ['index.js', 'store.dev.js','store.prod.js'],
  _files: ['App.css', 'index.css', 'index.jsx', 'logo.svg', 'react-app-env.d.ts', 'serviceWorker.ts', 'setupTests.ts'],
  constants: ['css', 'languages', 'utilities', 'constants.js', 'commonStyled.js'],
  actionTypes: ['index.js'],
  appRoutes: ['index.js'],
}

module.exports = defaultModule