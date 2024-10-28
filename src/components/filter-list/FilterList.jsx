import { FilterType } from '../../data';
import FilterItem from '../filter-item/FilterItem';
import style from'./FilterList.module.scss';

export default function FilterList() {
  return (
    <div>
      <h2 className="visually-hidden">Filter events</h2>
      <form className={style['trip-filters']} action="#" method="get">
        {Object.entries(FilterType).map(([key, value]) => (
          <FilterItem key={key} value={value} />
        ))}
        <button className="visually-hidden" type="submit">Accept filter</button>
      </form>
    </div>
  )
}
