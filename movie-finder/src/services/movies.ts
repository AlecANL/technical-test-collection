import {  IMovieMapped, ISearchMovieResponse } from '../models/search-movie.interface.ts';

interface ISearchMoviesProps {
	search: string;
}

interface IMappedMoviesProps {
	movies: ISearchMovieResponse;
}

const API_KEY = 'b1037795'
export function searchMovies({ search }: ISearchMoviesProps): Promise<IMovieMapped[]> {
	if (!search) return Promise.resolve([])

	return fetch(`https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`)
		.then((response) => response.json() as Promise<ISearchMovieResponse>)
		.then((movies) => {
			return mappedMovies({ movies: movies })
		})
}

export function mappedMovies({ movies }: IMappedMoviesProps): IMovieMapped[] {
	try {
		return movies.Search.map((movie) => {
			const { Title, Year, imdbID, Type, Poster } = movie
			return {
				title: Title,
				year: Year,
				id: imdbID,
				type: Type,
				poster: Poster
			}
		})
	} catch (error) {
		console.error(error)
		return []
	}
}