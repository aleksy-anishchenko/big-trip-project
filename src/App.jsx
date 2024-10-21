import EventPoint from './components/EventPoint';
import SortItem from './components/SortItem';
import { SortingType } from './const';
import { getRandomPoint } from './mock/points';

const COUNT_POINTS = 4;

export default function App() {
  const points = Array.from({length: COUNT_POINTS}, getRandomPoint);
  return (
    <>
      <h2 className="visually-hidden">Trip events</h2>
      <form className="trip-events__trip-sort  trip-sort" action="#" method="get">
        <SortItem name={SortingType.DAY.name} isDisabled={SortingType.DAY.isDisabled} isChecked={SortingType.DAY.isChecked} />
        <SortItem name={SortingType.EVENT.name} isDisabled={SortingType.EVENT.isDisabled} isChecked={SortingType.EVENT.isChecked} />
        <SortItem name={SortingType.TIME.name} isDisabled={SortingType.TIME.isDisabled} isChecked={SortingType.TIME.isChecked} />
        <SortItem name={SortingType.PRICE.name} isDisabled={SortingType.PRICE.isDisabled} isChecked={SortingType.PRICE.isChecked} />
        <SortItem name={SortingType.OFFER.name} isDisabled={SortingType.OFFER.isDisabled} isChecked={SortingType.OFFER.isChecked} />
      </form>
      <ul className="trip-events__list">
        {points.map((point) => (
          <EventPoint key={point.id} {...point} />
        ))}
      </ul>
    </>
  )
}
