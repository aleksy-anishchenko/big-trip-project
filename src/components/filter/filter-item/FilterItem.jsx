import lcs from './FilterItem.module.scss';
import {useContext} from 'react';
import AppContext from '../../../context.js';

export default function FilterItem({value, onChange}) {
  const {filter} = useContext(AppContext);
  const {selectedFilter} = filter;
  const filterValue = `filter-${value.toLowerCase()}`

  function handleFilterChange(evt) {
    onChange && onChange(evt);
  }

  return (
    <div className={lcs.tripFiltersFilter}>
      <input
        id={filterValue}
        className={`${lcs.tripFiltersFilterInput} visually-hidden`}
        type="radio"
        name="trip-filter"
        value={value.toLowerCase()}
        checked={value.toLowerCase() === selectedFilter.toLowerCase()}
        onChange={handleFilterChange}
      />
      <label className={lcs.tripFiltersFilterLabel} htmlFor={filterValue}>{value}</label>
    </div>
  )
}
