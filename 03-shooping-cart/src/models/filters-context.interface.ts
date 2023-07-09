import { IFilters } from './filters.interface.ts';
import React from 'react';

export interface IFilterContext {
	filters: IFilters;
	setFilters: React.Dispatch<React.SetStateAction<IFilters>>;
}

export interface IFilterContextProviderProps {
	children: React.ReactNode;
}