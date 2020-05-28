import { languageKeyEnRegex, languageKeyViRegex } from './../constants'
import en from './en.json'
import vi from './vi.json'
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