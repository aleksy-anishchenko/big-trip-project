import lcs from './SortItem.module.scss';
import cn from 'classnames';
import { SortingType } from '../../../data';

export default function SortItem({name, isDisabled}) {
  const isChecked = name === SortingType.DAY.name;
  const sortValue = `sort-${name.toLowerCase()}`

  const sortClassName = cn(
    lcs.tripSortItem,
    lcs[`trip-sort__item--${name.toLowerCase()}`]
  );

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
