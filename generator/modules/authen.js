const authenFeature = {
  actions: ['auth.js', 'login.js','register.js'],
  apis: ['auth.js'],
  components: ['login', 'signup'],
  containers: ['login', 'register'],
  reducers: ['auth.reducer.js', 'login.reducer.js', 'register.reducer.js'],
  sagas: ['auth.js', 'login.js', 'register.js'],
  actionTypes: ['auth.js'],
  appRoutes: ['auth.js'],
  constants: ['auth.constants.js']
}

module.exports = authenFeature