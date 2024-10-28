import style from './SortItem.module.scss';

export default function SortItem({name, isDisabled}) {
  const sortClassName = `${style['trip-sort__item']} ${style[`trip-sort__item--${name.toLowerCase()}`]}`;
  const isChecked = name === 'day';
  const sortValue = `sort-${name.toLowerCase()}`

  return (
    <div className={sortClassName}>
      <input
        id={sortValue}
        className={`${style['trip-sort__input']} visually-hidden`}
        type="radio" name="trip-sort"
        value={sortValue}
        disabled={isDisabled}
        checked={isChecked}
        onChange={() => {}}
      />
      <label className={style['trip-sort__btn']} htmlFor={sortValue}>{name}</label>
    </div>
  )
}
