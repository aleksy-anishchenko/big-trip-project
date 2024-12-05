import {FilterType} from '../../../data';
import {filterPoints} from '../../../utils.js';
import FilterItem from '../filter-item/FilterItem';
import lcs from './FilterList.module.scss';
import {useState} from 'react';

export default function FilterList({points, setPoints}) {
  const [originalPoints] = useState(points);
  const [selectedFilter, setSelectedFilter] = useState('EVERYTHING');

  function handleFilterChange(evt) {
    const filteredPoints = filterPoints(evt.target.value, originalPoints);
    setSelectedFilter(evt.target.value);
    setPoints(filteredPoints);
  }

  return (
    <div>
      <h2 className="visually-hidden">Filter events</h2>
      <form className={lcs.tripFilters} action="#" method="get">
        {Object.entries(FilterType).map(([key, value]) => (
          <FilterItem key={key} value={value} selectedFilter={selectedFilter} onChange={handleFilterChange}/>
        ))}
        <button className="visually-hidden" type="submit">Accept filter</button>
      </form>
    </div>
  )
}
