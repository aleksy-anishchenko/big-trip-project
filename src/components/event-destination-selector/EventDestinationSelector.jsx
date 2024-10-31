import lcs from './EventDestinationSelector.module.scss';
import cn from 'classnames';
import { mockDestinations } from '../../mock/mockDestinations';

export default function EventDestinationSelector({destination, type}) {
  const destinationName = destination ? mockDestinations.filter((element) => destination === element.id)[0].name : null;

  return (
    <div className={cn(lcs.eventFieldGroup, lcs.eventFieldGroupDestination)}>
      <label className={lcs.eventLabel} htmlFor="event-destination-1">{type}</label>
      <input className={cn(lcs.eventInput, lcs.eventInputDestination)} id="event-destination-1" type="text" name="event-destination" value={destinationName} list="destination-list-1" />
      <datalist id="destination-list-1">
        {mockDestinations.map((element) => (
          <option key={element.id} value={element.name}></option>
        ))}
      </datalist>
    </div>
  )
}
