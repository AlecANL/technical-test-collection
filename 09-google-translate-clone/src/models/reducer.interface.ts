import { type TRANSLATE_ACTION_TYPES } from '../const/translate-action-types.ts'

export interface ReducerAction<T = any> {
  type: keyof typeof TRANSLATE_ACTION_TYPES
  payload?: T
}
