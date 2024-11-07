import lcs from './SortItem.module.scss';
import cn from 'classnames';
import { SortingType } from '../../../data';

function getSortItemClassName(sortType) {
  const baseClass = lcs.tripSortItem;
  switch (sortType) {
    case 'day':
      return cn(baseClass, lcs.tripSortItemDay);
    case 'event':
      return cn(baseClass, lcs.tripSortItemEvent);
    case 'time':
      return cn(baseClass, lcs.tripSortItemTime);
    case 'price':
      return cn(baseClass, lcs.tripSortItemPrice);
    default:
      return baseClass;
  }
}

export default function SortItem({name, isDisabled}) {
  const isChecked = name === SortingType.DAY.name;
  const sortValue = `sort-${name.toLowerCase()}`;
  const sortClassName = getSortItemClassName(name);

  return (
    <div className={sortClassName}>
      <input
        id={sortValue}
        className={`${lcs.tripSortInput} visually-hidden`}
        type="radio" name="trip-sort"
        value={sortValue}
        disabled={isDisabled}
        checked={isChecked}
        onChange={() => {}}
      />
      <label className={lcs.tripSortBtn} htmlFor={sortValue}>{name}</label>
    </div>
  )
}
