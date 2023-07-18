import React from 'react'
import { type TodoTitle } from '../types'

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}

export const CreateTodo: React.FC<Props> = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = React.useState('' as string)

  function handleFormSubmit (e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    onAddTodo({
      title: inputValue
    })
    setInputValue('')
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          autoFocus
          className='new-todo'
          placeholder='What needs to be done?'
          value={inputValue}
          onChange={(e) => { setInputValue(e.target.value) }}
        />
      </form>

    </>
  )
}
