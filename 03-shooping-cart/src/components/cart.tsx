import { useId } from 'react';
import './cart.css'
import { CartIcon, ClearCartIcon } from './Icons.tsx';
import { IProductCart } from '../models/products.interface.ts';
import { useCart } from '../hooks/useCart.tsx';

export function CartItem(product: IProductCart) {
	const { addToCart } = useCart()
	return (
		<li>
			<img src={product.thumbnail} alt={product.title} />
			<div>
				<strong>{product.title}</strong> - ${product.price}
			</div>

			<footer>
				<small>Qty: ${product.quantity}</small>
				<button onClick={() => addToCart(product)} >+</button>
			</footer>
		</li>
	)
}

export function Cart() {
	const cartCheckboxId = useId()
	const { cart, clearCart } = useCart()

	return (
			<>
				<label className='cart-button' htmlFor={cartCheckboxId}>
					<CartIcon />
				</label>
				<input type='checkbox' id={cartCheckboxId}  hidden/>
				<aside className='cart'>
					<ul>
						{
							cart.map(product => <CartItem key={product.id} {...product} />)
						}
					</ul>
					<button onClick={clearCart}>
						<ClearCartIcon />
					</button>
				</aside>
			</>
		)
}