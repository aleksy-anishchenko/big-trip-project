import { FilterType } from './const'
import Filter from './components/Filter'

export default function Filters() {
  return (
    <div className="trip-controls__filters">
      <h2 className="visually-hidden">Filter events</h2>
      <form className="trip-filters" action="#" method="get">
        <Filter name={FilterType.EVERYTHING} />
        <Filter name={FilterType.FUTURE} />
        <Filter name={FilterType.PRESENT} />
        <Filter name={FilterType.PAST} />
        <button className="visually-hidden" type="submit">Accept filter</button>
      </form>
    </div>
  )
}
