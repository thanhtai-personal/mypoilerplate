import { languageKeyEnRegex, languageKeyViRegex } from './../constants'
import en from './en.json'
import vi from './vi.json'
export default [
  {
    test: languageKeyEnRegex,
    value: JSON.parse(en)
  },
  {
    test: languageKeyViRegex,
    value: JSON.parse(vi)
  }
]