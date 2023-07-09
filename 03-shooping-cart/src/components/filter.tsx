import './filter.css'
import { useId } from 'react';
import { useFilters } from '../hooks/useFilters.ts';

export function Filters () {
  const { setFilters, filters, } = useFilters()
  const minPriceFilterId = useId()
  const categoryFilterId = useId()
  function handleMinPriceChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFilters(prevState => ({
      ...prevState,
      minPrice: Number(event.target.value),
    }))
  }

  function handleCategoryChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value,
    }))
  }

  return (
    <>
      <section className='filters'>
        <div>
          <label htmlFor={minPriceFilterId}>Price</label>
          <input onChange={handleMinPriceChange} type='range' id={minPriceFilterId} value={filters.minPrice} name='price' min='0' max='1000' />
          <span>${filters.minPrice}</span>
        </div>
        <div>
          <label htmlFor={categoryFilterId}>Category</label>
          <select onChange={handleCategoryChange} name='category' id={categoryFilterId}>
            <option value='all'>All</option>
            <option value='laptops'>Laptops</option>
            <option value='smartphone'>SmartPhone</option>
          </select>
        </div>
      </section>
    </>
  )
}
