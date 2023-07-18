import { type TODO_FILTERS } from './constants/consts.ts'

export interface Todo {
  id: string
  title: string
  completed: boolean
}

export type listOfTodos = Todo[]

export type TodoId = Pick<Todo, 'id'>

export type TodoTitle = Pick<Todo, 'title'>

export type TodoOperations = (id: TodoId) => void

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]

export type FilterOperations = (filter: FilterValue) => void
