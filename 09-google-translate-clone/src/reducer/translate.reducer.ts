import { type TranslateReducerState } from '../models/translate-reducer.interface.ts'
import { TRANSLATE_ACTION_TYPES, type TRANSLATE_ACTIONS } from '../const/translate-action-types.ts'
import { AUTO_LANGUAGE } from '../const/supported-languages.ts'

export const initialState: TranslateReducerState = {
  fromLanguage: 'auto',
  toLanguage: 'es',
  fromText: '',
  result: '',
  isLoading: false
}

export const translateReducer = (state = initialState, action: TRANSLATE_ACTIONS): TranslateReducerState => {
  const { type } = action

  if (type === TRANSLATE_ACTION_TYPES.INTERCHANGE_LANGUAGES) {
    if (state.fromLanguage === AUTO_LANGUAGE) { return state }

    const loading = state.fromText !== ''

    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage,
      isLoading: loading,
      result: ''
    }
  }

  if (type === TRANSLATE_ACTION_TYPES.SET_FROM_LANGUAGE) {
    return {
      ...state,
      fromLanguage: action.payload
    }
  }

  if (type === TRANSLATE_ACTION_TYPES.SET_TO_LANGUAGE) {
    return {
      ...state,
      toLanguage: action.payload
    }
  }

  if (type === TRANSLATE_ACTION_TYPES.SET_FROM_TEXT) {
    return {
      ...state,
      isLoading: true,
      result: '',
      fromText: action.payload
    }
  }

  if (type === TRANSLATE_ACTION_TYPES.SET_RESULT) {
    return {
      ...state,
      isLoading: false,
      result: action.payload
    }
  }

  return state
}
