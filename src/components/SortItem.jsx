export default function SortItem({name, isDisabled, isChecked}) {
  return (
    <div className={`trip-sort__item trip-sort__item--${name.toLowerCase()}`} >
      <input
        id={`sort-${name.toLowerCase()}`}
        className="trip-sort__input visually-hidden"
        type="radio" name="trip-sort"
        value={`sort-${name.toLowerCase()}`}
        disabled={isDisabled}
        checked={isChecked}
      />
      <label className="trip-sort__btn" htmlFor={`sort-${name.toLowerCase()}`}>{name}</label>
    </div>
  )
}
