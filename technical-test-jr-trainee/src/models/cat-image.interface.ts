export interface ICatImage {
	tags:      any[];
	createdAt: Date;
	updatedAt: Date;
	validated: boolean;
	owner:     string;
	file:      string;
	mimetype:  string;
	size:      number;
	_id:       string;
	url:       string;
}

export interface IUseCatImageParams {
	fact: string;
}