import { useCallback, useMemo, useRef, useState } from 'react';
import { IMovieMapped } from '../models/search-movie.interface.ts';
import { searchMovies } from '../services/movies.ts';

interface IUseMovieProps {
  search: string;
  sort: boolean;
}

interface IGetMoviesProps {
  search: string;
}

export function useMovie ({ search, sort }: IUseMovieProps) {
  const [movies, setMovies] = useState<IMovieMapped[]>([])
  const searchRef = useRef(search)

  const getMovies = useCallback(
    ({ search }: IGetMoviesProps) => {
      if (searchRef.current === search) return

      searchMovies({ search })
        .then(setMovies)
      searchRef.current = search
    }, []
  )
  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])


  return { movies: sortedMovies, getMovies }
}
