import { IMovieMapped } from '../models/search-movie.interface.ts';

export function ListOfMovies({ movies }: IListOfMoviesProps) {
	return (
		<ul className='movies'>
			{
				movies.map(movie => (
					<li key={movie.id} className='movie'>
						<img src={movie.poster} alt={movie.title} />
						<div>
							<h2>{movie.title}</h2>
							<span>{movie.year}</span>
						</div>
					</li>
				))
			}
		</ul>
	)
}

interface IListOfMoviesProps {
	movies: IMovieMapped[];
}

export function NoMoviesResults() {
	return (
		<div className='empty'>
			<h2>No movies found</h2>
		</div>
	)
}

export function Movies({ movies }: IListOfMoviesProps) {
	const hasMovies = movies.length > 0
	return (
		hasMovies
		? <ListOfMovies movies={movies} />
		: <NoMoviesResults />
	)
}