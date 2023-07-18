import React from 'react'
import { type Todo as TodoTypes, type TodoOperations } from '../types'

export interface Props extends TodoTypes {
  onRemoveTodo: TodoOperations
  onCompletedTodo: TodoOperations
}

export const Todo: React.FC<Props> = (props) => {
  const { completed, title, onRemoveTodo, id, onCompletedTodo } = props

  return (
    <div className='view'>
      <input
        className='toggle'
        type='checkbox'
        checked={completed}
        onChange={() => { onCompletedTodo({ id }) }}
      />
      <label>{title}</label>
      <button className='destroy' onClick={() => { onRemoveTodo({ id }) }}/>
    </div>
  )
}
