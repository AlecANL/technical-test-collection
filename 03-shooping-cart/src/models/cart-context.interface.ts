import { IProductCart, Product } from './products.interface.ts';

export interface ICartProviderProps {
	children: React.ReactNode;
}

export interface ICartContext {
	cart: IProductCart[];
	addToCart: (product: Product) => void;
	removeFromCart: (product: Product) => void;
	clearCart: () => void;
}