import { createContext, useState } from 'react';
import { IFilterContext, IFilterContextProviderProps } from '../models/filters-context.interface.ts';

export const FiltersContext = createContext<IFilterContext | null>(null);

export function FiltersProvider({ children }: IFilterContextProviderProps) {
	const [filters, setFilters] = useState({
		category: 'all',
		minPrice: 0,
	})

	const value = {
		filters,
		setFilters,
	} as IFilterContext

	return (
		<FiltersContext.Provider value={value}>
			{children}
		</FiltersContext.Provider>
	)
}