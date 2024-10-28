import style from './FilterItem.module.scss';

export default function FilterItem({value}) {
  const isChecked = value === 'EVERYTHING';
  const filterValue = `filter-${value.toLowerCase()}`
  return (
    <div className={style['trip-filters__filter']}>
      <input
        id={filterValue}
        className={`${style['trip-filters__filter-input']} visually-hidden`}
        type="radio"
        name="trip-filter"
        value={value.toLowerCase()}
        checked={isChecked}
        onChange={() => {}}
      />
      <label className={style['trip-filters__filter-label']} htmlFor={filterValue}>{value}</label>
    </div>
  )
}
