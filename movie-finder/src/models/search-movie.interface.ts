export interface ISearchMovieResponse {
	Search:       IMovie[];
	totalResults: string;
	Response:     string;
}

export interface IMovie {
	Title:  string;
	Year:   string;
	imdbID: string;
	Type:   string;
	Poster: string;
}

export interface IMovieMapped {
	title:  string;
	year:   string;
	id: string;
	type:   string;
	poster: string;
}

export interface ISearchMovieErrorResponse {
	Response: string;
	Error:    string;
}
