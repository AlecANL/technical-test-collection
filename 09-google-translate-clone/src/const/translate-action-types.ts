import { type FromLanguage, type Language } from '../models/translate-reducer.interface.ts'

export const TRANSLATE_ACTION_TYPES = {
  INTERCHANGE_LANGUAGES: 'INTERCHANGE_LANGUAGES',
  SET_FROM_LANGUAGE: 'SET_FROM_LANGUAGE',
  SET_TO_LANGUAGE: 'SET_TO_LANGUAGE',
  SET_FROM_TEXT: 'SET_FROM_TEXT',
  SET_RESULT: 'SET_RESULT'
} as const

export type TRANSLATE_ACTIONS =
  | { type: typeof TRANSLATE_ACTION_TYPES.INTERCHANGE_LANGUAGES }
  | { type: typeof TRANSLATE_ACTION_TYPES.SET_FROM_LANGUAGE, payload: FromLanguage }
  | { type: typeof TRANSLATE_ACTION_TYPES.SET_TO_LANGUAGE, payload: Language }
  | { type: typeof TRANSLATE_ACTION_TYPES.SET_FROM_TEXT, payload: string }
  | { type: typeof TRANSLATE_ACTION_TYPES.SET_RESULT, payload: string }
