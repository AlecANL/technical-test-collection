import React from 'react'
import { type TodoTitle } from '../types'
import { CreateTodo } from './create-todo.tsx'

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <>
      <header>
        <h1>
          todos
          <img style={{ width: '60px', height: 'auto' }}
               src='https://cdn.svgporn.com/logos/typescript-icon.svg' alt="logo" />
        </h1>
        <CreateTodo onAddTodo={onAddTodo} />
      </header>
    </>
  )
}
