import authConstants from './auth.constants'
export default {
  languageKeyEnRegex: new RegExp(/\/(en|EN|En|eN)\//),
  languageKeyViRegex: new RegExp(/\/(vi|VI|vI|Vi)\//),
  ...authConstants
}