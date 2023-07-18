import React from 'react'
import { Todo } from './todo.tsx'
import { type listOfTodos, type TodoOperations } from '../types'
export interface Props {
  todos: listOfTodos
  onRemoveTodo: TodoOperations
  onCompletedTodo: TodoOperations
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onCompletedTodo }) => {
  return (
    <>
      <ul className='todo-list'>
        {
          todos.map(todo => (
            <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
              <Todo
                completed={todo.completed}
                title={todo.title}
                id={todo.id}
                onRemoveTodo={onRemoveTodo}
                onCompletedTodo={onCompletedTodo}
              />
            </li>
          ))
        }
      </ul>

    </>
  )
}
