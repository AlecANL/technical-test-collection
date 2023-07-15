import { useSpreadSheet } from '../hooks/useSpreadSheet.ts'
import { useState } from 'react'
import {getColumn} from "../utils/utils.ts";

interface IProps {
  rows: number
  columns: number
}

interface IUpdateCell {
  x: number
  y: number
  value: IValueState
}

interface IValueState {
  computedValue: any
  value: any
}

interface Column {
  x: number
  y: number
  update: (props: IUpdateCell) => void
  cells: IValueState
}

const range = (length: number) => Array.from({ length }, (_, i) => i)


export function SpreadSheet (props: IProps) {
  const { rows, columns } = props
  const { cells, updateCell } = useSpreadSheet({
    rows,
    columns
  })

  function getCells (x: number, y: number) {
    return cells[x][y]
  }

  return (
    <>
      <table className='[&_td]:w-16'>
        <thead className='thead'>
          <td></td>
          {
            range(columns).map(column => (
              <th className='bg-slate-300' key={column}>{getColumn(column)}</th>
            ))
          }
        </thead>
        {
          range(rows).map(row => (
            <tr key={row}>
              <td className='bg-slate-300' key={`first-${row}`}>{row}</td>
              {
                range(columns).map(column => (
                  <td key={column}>
                    <Cell
                      x={column}
                      y={row}
                      update={updateCell}
                      cells={getCells(column, row)}
                    />
                  </td>
                ))
              }
            </tr>
          ))
        }
      </table>
    </>
  )
}

function Cell ({ x, y, update, cells }: Column) {
  const [isEditing, setIsEditing] = useState(false)
  function handleChange () {
    setIsEditing((prev) => !prev)
  }

  function handleInputChange (value: React.ChangeEvent<HTMLInputElement>) {
    const { value: inputValue } = value.target
    setIsEditing(false)

    update({
      x,
      y,
      value: {
        ...cells,
        value: inputValue
      }
    })
  }

  if (isEditing) {
    return (
      <>
        <input
          data-testid={`input-${x}-${y}`}
          autoFocus
          defaultValue={cells.value}
          className='block w-full'
          onBlur={handleInputChange}
        />
      </>
    )
  }

  return (
    <>
      <span
        data-testid={`span-${x}-${y}`}
        className='block text-start cursor-pointer select-none static-cell'
        onClick={handleChange}>{cells.computedValue}
      </span>
    </>
  )
}
