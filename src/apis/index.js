import devConfig from './devConfig'
import prdConfig from './prodConfig'
import authApi from './auth'
import axios from 'axios'

let config = devConfig
if (process.env.NODE_ENV === 'production') {
  config = prdConfig
}

const apis = {
  auth: authApi
}

let apiService = {}
Object.keys(apis).forEach((scene) => {
  apiService[scene] = {}
  Object.keys(apis[scene]).forEach((apiName) => {
    apiService[scene][apiName] = (_data) => {
      let data = apis[scene][apiName](_data)
      return axios({ ...config, ...data })
    }
  })
})

//yield apiSercive.auth.login(data)


export default apiService