import { Product } from '../models/products.interface.ts';
import { useContext } from 'react';
import { FiltersContext } from '../context/filters.context.tsx';
import { IFilterContext } from '../models/filters-context.interface.ts';

export function useFilters() {
	const { filters, setFilters } = useContext(FiltersContext) as IFilterContext;
	function filterProducts(products: Product[]) {
		return products.filter(product => {
			return product.price >= filters.minPrice && (filters.category === 'all' || product.category === filters.category)
		})
	}

	return {
		filters,
		setFilters,
		filterProducts,
	}
}