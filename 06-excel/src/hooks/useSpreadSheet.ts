import {useReducer} from 'react'
import {getColumn} from '../utils/utils.ts'

interface IGetInitialState {
  columns: number
  rows: number
}

interface IUpdateCell {
  x: number
  y: number
  value: IValueState
}

interface IUserSpreadSheet {
  columns: number
  rows: number
}

interface IState {
  cells: IValueState[][]
}

interface IValueState {
  computedValue: any
  value: any
}

interface IReducer {
  cells: IValueState[][]
}

interface IActionType {
  type: string
  payload: any
}

function getInitialState ({ columns, rows }: IGetInitialState): IState {
  const cells = Array.from(
    { length: columns },
    () => Array.from({ length: rows }, () => ({
      computedValue: 0,
      value: 0
    }))
  )

  return {
    cells
  }
}

function generateCode (value: any, constants: any) {
  return `(() => {
    ${constants}
    return ${value}
  })()`
}

function generateCellsConstants (cells: IValueState[][]) {
  return cells.map((rows, x) => {
    return rows.map((cell, y) => {
      const letter = getColumn(x)
      const cellId = `${letter}${y}`
      return `const ${cellId} = ${cell.computedValue};`
    }).join('\n')
  }).join('\n')
}

function computedValues (value: any, constants: any) {
  if (!String(value).startsWith('=')) return value

  let computedValue
  const valueToUse = value.substring(1)

  try {
    // eslint-disable-next-line no-eval
    computedValue = eval(generateCode(valueToUse, constants))
  } catch (error) {
    computedValue = `!ERROR: ${error}`
  }

  return computedValue
}

function computedAllCells (cells: IValueState[][], constants: string) {
  cells.forEach((rows) => {
    rows.forEach((cell) => {
      cell.computedValue = computedValues(cell.value, constants)
    })
  })
}

function reducer (state: IReducer, action: IActionType): IReducer {
  const { type, payload } = action

  if (type === 'UPDATE_CELL') {
    const cells: IValueState[][] = structuredClone(state.cells)
    const { column, row, value } = payload
    const constants = generateCellsConstants(cells)

    const cell = cells[column][row]

    cell.value = value
    cell.computedValue = computedValues(value, constants)

    computedAllCells(cells, generateCellsConstants(cells))
    return { cells }
  }

  return state
}

export function useSpreadSheet ({ columns, rows }: IUserSpreadSheet) {
  const [{ cells }, dispatch] = useReducer(reducer, getInitialState({ columns, rows }))

  function updateCell ({ x, y, value }: IUpdateCell) {
    dispatch({
      type: 'UPDATE_CELL',
      payload: {
        column: x,
        row: y,
        value: value.value
      }
    })
  }

  return {
    cells,
    updateCell
  }
}
