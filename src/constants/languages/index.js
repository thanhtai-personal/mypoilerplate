import constants from './../constants'
import en from './en.json'
import vi from './vi.json'
const { languageKeyEnRegex, languageKeyViRegex } = constants
export default [
  {
    test: languageKeyEnRegex,
    value: en
  },
  {
    test: languageKeyViRegex,
    value: vi
  }
]