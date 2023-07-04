import React, { useEffect } from 'react'

export function useSearch () {
  const [query, setQuery] = React.useState('')
  const [error, setError] = React.useState < string | null > (null)
  const isFirstInput = React.useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = query === ''
      return
    }

    if (!query) {
      setError('Not search by movie for empty input')
      return
    }

    if (query.match(/^\d+$/)) {
      setError('Should not search by movie for numbers')
      return
    }

    if (query.length < 3) {
      setError('Should not search by movie for less than 3 characters')
      return
    }

    setError(null)
  }, [query])

  return {
    query,
    setQuery,
    error
  }
}
