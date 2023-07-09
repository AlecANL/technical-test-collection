import { useContext } from 'react';
import { CartContext } from '../context/cart.context.tsx';
import { ICartContext } from '../models/cart-context.interface.ts';

export function useCart() {
	const context = useContext(CartContext) as ICartContext;

	if (!context) {
		throw new Error('useCart must be used within a CartProvider');
	}

	return context;
}