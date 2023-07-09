import { IProductCart, Product } from './products.interface.ts';

export interface ICartState {
	cart: IProductCart[];
}

export interface ICartAction {
	type: string;
	payload?: Product;
}