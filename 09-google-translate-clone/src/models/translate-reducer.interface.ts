import { type AUTO_LANGUAGE, type SUPPORTED_LANGUAGES } from '../const/supported-languages.ts'

export type Language = keyof typeof SUPPORTED_LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGE
export type FromLanguage = Language | AutoLanguage

export interface TranslateReducerState {
  fromLanguage: FromLanguage
  toLanguage: Language
  fromText: string
  result: string
  isLoading: boolean
}

export interface UseTranslateReturnType extends TranslateReducerState {
  setFromLanguage: (language: Language) => void
  setToLanguage: (language: Language) => void
  setFromText: (text: string) => void
  setResult: (text: string) => void
  interchangeLanguages: () => void
}
