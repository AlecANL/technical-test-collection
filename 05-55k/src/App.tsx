import './App.css'
import { useEffect, useMemo, useRef, useState } from 'react'
import { type Result, SortBy, type Users } from './models/users.interface.ts'
import { UserList } from './components/user-list.tsx'

function App () {
  const [users, setUsers] = useState<Result[]>([])
  const [filterCountry, setFilterCountry] = useState<string>('')
  const [showColors, setShowColors] = useState<boolean>(false)
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE)
  const originalUsers = useRef<Result[]>([])

  useEffect(() => {
    void fetch('https://randomuser.me/api/?results=100')
      .then(async response => await (await response.json() as Promise<Users>))
      .then(data => {
        setUsers(data.results)
        originalUsers.current = data.results
      })
  }, [])

  function toggleColors () {
    setShowColors(!showColors)
  }

  function toggleSortByCountry () {
    const newSortingValue = sorting === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE
    setSorting(newSortingValue)
  }

  function handleDelete (email: string) {
    const filteredUsers = users.filter((user) => user.email !== email)
    setUsers(filteredUsers)
  }

  function handleReset () {
    setUsers(originalUsers.current)
  }

  function handleInputChange (event: React.ChangeEvent<HTMLInputElement>) {
    setFilterCountry(event.target.value)
  }

  const filteredUsers = useMemo(() => {
    return filterCountry !== null && filterCountry.length > 0
      ? users.filter((user) => user.location.country.toLowerCase().includes(filterCountry.toLowerCase()))
      : users
  }, [filterCountry, users])

  const sortedUsers = useMemo(() => {
    if (sorting === SortBy.NONE) {
      return filteredUsers
    }

    const compareProperties: Record<string, (user: Result) => any> = {
      [SortBy.NAME]: user => user.name.first,
      [SortBy.LAST]: user => user.name.last,
      [SortBy.COUNTRY]: user => user.location.country
    }

    return filteredUsers.toSorted((a: Result, b: Result) => {
      const property = compareProperties[sorting]
      return property(a).localeCompare(property(b))
    })
  }, [filteredUsers, sorting])

  function handleChangeSort (sorting: SortBy) {
    setSorting(sorting)
  }

  return (
    <>
      <div className='app'>
        <h1>Technical Test</h1>
        <header>
          <button onClick={toggleColors}>Toggle colors</button>
          <button onClick={handleReset}> Reset State </button>
          <button onClick={toggleSortByCountry}>
            {sorting === SortBy.COUNTRY ? 'Unsorted' : 'Sort by country'}
          </button>
          <input placeholder='Alemania...' onChange={handleInputChange} />
        </header>
        <main>
          <UserList changeSorting={handleChangeSort} handleDelete={handleDelete} showColors={showColors} users={sortedUsers} />
        </main>
      </div>
    </>
  )
}

export default App
