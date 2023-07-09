import { ICartAction, ICartState } from '../models/cart-reducer.interface.ts';
import { Product } from '../models/products.interface.ts';

export const initialState: ICartState = JSON.parse(localStorage.getItem('cart') as string) ?? {
	cart: []
}

function updateLocalStorage(state: ICartState) {
	localStorage.setItem('cart', JSON.stringify(state))
}
export function cartReducer(state: ICartState, action: ICartAction) {
	const { type, payload } = action ?? {};

	switch (type) {
		case 'ADD_TO_CART':
			return addToCart(state, payload as Product);
		case 'CLEAR_CART':
			return clearCart();
		case 'REMOVE_FROM_CART':
			return removeFromCart(state, payload as Product);
	}

	return state;
}


function addToCart(state: ICartState, product: Product): ICartState {
	const { cart } = state
	const productInCart = cart.findIndex(item => item.id === product.id)

	if (productInCart >= 0) {
		// const newState = structuredClone(state)
		// state.cart[productInCart].quantity += 1
		// updateLocalStorage(newState)
		// return newState;

		const newState = {
			...state,
			cart: [
				...state.cart.slice(0, productInCart),
				{...state.cart[productInCart], quantity: state.cart[productInCart].quantity + 1},
				...state.cart.slice(productInCart + 1)
			]
		}

		updateLocalStorage(newState)
		return newState
	}

	const newState = {
		...state,
		cart: [
			...state.cart,
			{
				...product,
				quantity: 1
			}
		]

	}



	updateLocalStorage(newState)
	return newState
}

function clearCart(): ICartState {
	updateLocalStorage(initialState)
	return initialState
}

function removeFromCart(state: ICartState, product: Product): ICartState {
	const { cart } = state
	const filteredCart = cart.filter(item => item.id !== product.id)

	const newState = {
		...state,
		cart: filteredCart
	}

	updateLocalStorage(newState)
	return newState
}