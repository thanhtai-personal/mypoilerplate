import { all } from 'redux-saga/effects'
import authSagas from './auth'
import vietMapSagas from './vietMap'


export default function* rootSaga() {
  const listSagas = [
    authSagas,
    vietMapSagas
  ]
  yield all(listSagas.map((saga) => saga()))
}