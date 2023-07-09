import { useReducer } from 'react';
import { cartReducer, initialState } from '../reducers/cart.reducer.ts';
import { Product } from '../models/products.interface.ts';

export function useCartReducer()  {
	const [state, dispatch] = useReducer(cartReducer, initialState)


	function addToCart(product: Product) {
		dispatch({ type: 'ADD_TO_CART', payload: product })
	}

	function clearCart() {
		dispatch({ type: 'CLEAR_CART' })
	}

	function removeFromCart(product: Product) {
		dispatch({ type: 'REMOVE_FROM_CART', payload: product })
	}

	return {
		cart: state.cart,
		addToCart,
		clearCart,
		removeFromCart
	}
}