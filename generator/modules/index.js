const authenFeature = require('./authen')
const defaultModule = require('./default')
const vietmapModule = require('./vietMap')
const historicalmapModule = require('./historicalMap')
const cvModule = require('./cv')

module.exports = {
  defaultModule,
  authenFeature,
  vietmapModule,
  historicalmapModule,
  cvModule
}