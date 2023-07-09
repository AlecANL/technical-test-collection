import { createContext } from 'react';
import { ICartContext, ICartProviderProps } from '../models/cart-context.interface.ts';
import { useCartReducer } from '../hooks/useCartReducer.ts';

export const CartContext = createContext<ICartContext | null>(null)


export function CartProvider({ children }: ICartProviderProps) {
	const { cart, clearCart, addToCart, removeFromCart} = useCartReducer()


	const value: ICartContext = {
		cart,
		addToCart,
		clearCart,
		removeFromCart,
	}

	return (
		<CartContext.Provider value={value}>
			{children}
		</CartContext.Provider>
	)
}