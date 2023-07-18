import { type FilterOperations, type FilterValue } from '../types'
import { Filters } from './filters.tsx'

interface Props {
  activeCount: number
  completedCount: number
  filterSelected: FilterValue
  onFilterChange: FilterOperations
  onClearCompleted: () => void
}

export const Footer: React.FC<Props> = (props) => {
  const { activeCount, completedCount, filterSelected, onFilterChange, onClearCompleted } = props

  return (
    <>
      <footer className='footer'>
        <span className='todo-count'>
          <strong>{activeCount}</strong> pending tasks
        </span>
        <Filters filterSelected={filterSelected} onFilterChange={onFilterChange}/>
        {
          completedCount > 0 && (
            <button className='clear-completed' onClick={onClearCompleted}>Delete Completed</button>
          )
        }
      </footer>
    </>
  )
}
