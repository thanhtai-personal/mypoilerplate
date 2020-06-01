import { all } from 'redux-saga/effects'
import authSagas from './auth'
import loginSagas from './login'
import registerSagas from './register'


export default function* rootSaga() {
  const listSagas = [
    authSagas,
    loginSagas,
    registerSagas
  ]
  yield all(listSagas.map((saga) => saga()))
}