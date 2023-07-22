import { useReducer } from 'react'
import { initialState, translateReducer } from '../reducer/translate.reducer.ts'
import { TRANSLATE_ACTION_TYPES } from '../const/translate-action-types.ts'
import { type Language, type UseTranslateReturnType } from '../models/translate-reducer.interface.ts'

export const useTranslate = (): UseTranslateReturnType => {
  const [{
    fromLanguage,
    toLanguage,
    fromText,
    result,
    isLoading
  }, dispatch] = useReducer(translateReducer, initialState)

  const setFromLanguage = (language: Language): void => {
    dispatch({
      type: TRANSLATE_ACTION_TYPES.SET_FROM_LANGUAGE,
      payload: language
    })
  }

  const setToLanguage = (language: Language): void => {
    dispatch({
      type: TRANSLATE_ACTION_TYPES.SET_TO_LANGUAGE,
      payload: language
    })
  }

  const setFromText = (text: string): void => {
    dispatch({
      type: TRANSLATE_ACTION_TYPES.SET_FROM_TEXT,
      payload: text
    })
  }

  const setResult = (text: string): void => {
    dispatch({
      type: TRANSLATE_ACTION_TYPES.SET_RESULT,
      payload: text
    })
  }

  const interchangeLanguages = (): void => {
    dispatch({
      type: TRANSLATE_ACTION_TYPES.INTERCHANGE_LANGUAGES
    })
  }

  return {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    isLoading,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult,
    interchangeLanguages
  }
}
