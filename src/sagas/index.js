import { all, spawn, call } from 'redux-saga/effects'
import authSagas from './auth'


export default function* rootSaga () {
  const listSagas = [ ...authSagas ]
  yield all(listSagas.map(saga =>
    spawn(function* () {
      while (true) {
        try {
          yield call(saga)
          break
        } catch (e) {
          console.error(e)
        }
      }
    }))
  );
}