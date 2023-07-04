import './App.css'
import { Movies } from './components/movies.tsx'
import { useMovie } from './hooks/useMovie.ts'
import React, { useCallback, useState } from 'react';
import { useSearch } from './hooks/useSearch.ts';
import debounce from 'just-debounce-it';



function App () {
  const [sort, setSort] = useState(false)
  const { query, setQuery, error } = useSearch()
  const { movies, getMovies } = useMovie({
    search: query,
    sort,
  })

  const debounceMovies = useCallback(
    debounce((search: string) => {
      getMovies({
        search,
      })
    }, 500), [])


  function handleSubmit (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    getMovies({
      search: query,
    })
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newQuery = event.target.value;
    setQuery(newQuery)
    debounceMovies(newQuery)
  }

  function handleSort() {
    setSort(!sort)
  }




  return (
    <>
      <div className='page'>
        <header>
          <form onSubmit={handleSubmit} className='form'>
            <input onChange={handleChange} value={query} name='search' type='text' placeholder='Avengers, Start Wars, The Matriz...' />
            <input type='checkbox' checked={sort} onChange={handleSort} />
            <button>Search</button>
          </form>
          {error && <p className='error'>{error}</p>}
        </header>
        <main>
          <Movies movies={movies} />
        </main>
      </div>
    </>
  )
}

export default App
