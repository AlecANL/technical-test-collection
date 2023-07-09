import './products.css'
import { Product } from '../models/products.interface.ts';
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.tsx';
import { useCart } from '../hooks/useCart.tsx';

interface IProductsProps {
	products: Product[]
}

export function Products({ products }: IProductsProps) {
	const { addToCart, cart, removeFromCart } = useCart()

	function checkProductInCart(product: Product) {
		return cart.some((item: Product) => item.id === product.id)
	}

	function handleAddToCart(product: Product, isProductInCart: boolean) {
		if (isProductInCart) {
			removeFromCart(product)
			return
		}

		addToCart(product)
	}

	return (
		<>
			<main className='products'>
				<ul>
					{
						products.slice(0, 10).map(product => {
							const productInCart = checkProductInCart(product)

							return (
								(
									<li key={product.id}>
										<img src={product.thumbnail} alt={product.title} />
										<div>
											<strong>{product.title}</strong> - <span>${product.price}</span>
										</div>
										<div>
											<button onClick={() => handleAddToCart(product, productInCart)}>
												{
													productInCart
													? <RemoveFromCartIcon/>
													: <AddToCartIcon/>
												}
											</button>
										</div>
									</li>
								)
							)
						})
					}
				</ul>
			</main>
		</>
	)
}