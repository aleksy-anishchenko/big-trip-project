import style from './EventDestinationSelector.module.scss';
import DataItem from '../data-item/DataItem';
import { mockDestinations } from '../../mock/mockDestinations';

export default function EventDestinationSelector({destination, type}) {
  const destinationName = destination ? mockDestinations.filter((element) => destination === element.id)[0].name : null;

  return (
    <div className={`${style['event__field-group']} ${style['event__field-group--destination']}`}>
      <label className={style['event__label']} htmlFor="event-destination-1">{type}</label>
      <input className={`${style['event__input']} ${style['event__input--destination']}`} id="event-destination-1" type="text" name="event-destination" value={destinationName} list="destination-list-1" />
      <datalist id="destination-list-1">
        {mockDestinations.map((element) => (
          <DataItem key={element.id} value={element.name} />
        ))}
      </datalist>
    </div>
  )
}
