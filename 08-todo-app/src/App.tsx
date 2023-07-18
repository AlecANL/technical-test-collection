import { useState } from 'react'
import { mockTodos } from './data/mocks/todos.mock.ts'
import { Todos } from './components/todos.tsx'
import {type FilterValue, type TodoId, TodoTitle} from './types'
import { TODO_FILTERS } from './constants/consts.ts'
import { Footer } from './components/footer.tsx'
import {Header} from "./components/header.tsx";

function App (): JSX.Element {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const onRemoveTodo = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const onCompletedTodo = ({ id }: TodoId): void => {
    const todoIndex = todos.findIndex(todo => todo.id === id)
    if (todoIndex >= 0) {
      const newTodos = [
        ...todos.slice(0, todoIndex),
        { ...todos[todoIndex], completed: !todos[todoIndex].completed },
        ...todos.slice(todoIndex + 1)
      ]

      setTodos(newTodos)
    }
  }

  const onFilterChange = (key: FilterValue): void => {
    setFilterSelected(key)
  }

  const onClearCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const activeCount = todos.filter(todo => !todo.completed).length

  const completedCount = todos.filter(todo => todo.completed).length

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const onAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      id: String(Math.floor(Math.random() * 1000)),
      title,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  return (
    <>
      <h1>Todo mvc</h1>
      <div className='todoapp'>
        <Header onAddTodo={onAddTodo}/>
        <Todos todos={filteredTodos} onRemoveTodo={onRemoveTodo} onCompletedTodo={onCompletedTodo}/>
        <Footer
          activeCount={activeCount}
          completedCount={completedCount}
          filterSelected={filterSelected}
          onFilterChange={onFilterChange}
          onClearCompleted={onClearCompleted}
          />
      </div>
    </>
  )
}

export default App
