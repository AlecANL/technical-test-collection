import { type FilterOperations, type FilterValue } from '../types'
import { FILTERS_BUTTONS } from '../constants/consts.ts'

interface Props {
  filterSelected: FilterValue
  onFilterChange: FilterOperations
}

export const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
  return (
    <>
      <ul className='filters'>
        {
          Object.entries(FILTERS_BUTTONS).map(([key, { literal, href }]) => {
            const isSelected = filterSelected === key
            const className = isSelected ? 'selected' : ''

            return (
              <li key={key}>
                <a
                  className={className}
                  href={href}
                  onClick={(event) => {
                    event.preventDefault()
                    onFilterChange(key as FilterValue)
                  }}
                >
                  {literal}
                </a>
              </li>
            )
          })
        }
      </ul>

    </>
  )
}
