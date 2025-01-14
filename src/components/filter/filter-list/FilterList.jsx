import {FilterType} from '../../../data';
import {filterPoints} from '../../../utils.js';
import FilterItem from '../filter-item/FilterItem';
import lcs from './FilterList.module.scss';
import {useState, useContext} from 'react';

import AppContext from '../../../context.js';

export default function FilterList() {
  const {pointArray, filter} = useContext(AppContext);
  const {points, setPoints} = pointArray;
  const [originalPoints] = useState(points);
  const {setSelectedFilter} = filter;

  function handleFilterChange(evt) {
    const filteredPoints = filterPoints(evt.target.value, originalPoints);
    setSelectedFilter(evt.target.value.toUpperCase());
    setPoints(filteredPoints);
  }

  return (
    <div>
      <h2 className="visually-hidden">Filter events</h2>
      <form className={lcs.tripFilters} action="#" method="get">
        {Object.entries(FilterType).map(([key, value]) => (
          <FilterItem key={key} value={value} onChange={handleFilterChange}/>
        ))}
        <button className="visually-hidden" type="submit">Accept filter</button>
      </form>
    </div>
  )
}
