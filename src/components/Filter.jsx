export default function Filter({name}) {
  const isChecked = name === 'EVERYTHING';
  return (
    <div className="trip-filters__filter">
      <input
        id={`filter-${name.toLowerCase()}`}
        className="trip-filters__filter-input visually-hidden"
        type="radio"
        name="trip-filter"
        value={name.toLowerCase()}
        checked={isChecked}
      />
      <label className="trip-filters__filter-label" htmlFor={`filter-${name.toLowerCase()}`}>{name}</label>
    </div>
  )
}
