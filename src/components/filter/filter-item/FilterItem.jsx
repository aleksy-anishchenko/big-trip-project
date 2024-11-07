import lcs from './FilterItem.module.scss';

export default function FilterItem({value}) {
  const isChecked = value === 'EVERYTHING';
  const filterValue = `filter-${value.toLowerCase()}`
  return (
    <div className={lcs.tripFiltersFilter}>
      <input
        id={filterValue}
        className={`${lcs.tripFiltersFilterInput} visually-hidden`}
        type="radio"
        name="trip-filter"
        value={value.toLowerCase()}
        checked={isChecked}
        onChange={() => {}}
      />
      <label className={lcs.tripFiltersFilterLabel} htmlFor={filterValue}>{value}</label>
    </div>
  )
}
