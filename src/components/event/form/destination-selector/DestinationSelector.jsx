import cn from 'classnames';
import { mockDestinations } from '../../../../mock/mockDestinations';
import lcs from './DestinationSelector.module.scss';

export default function DestinationSelector({destination, type}) {
  const destinationName = destination ? mockDestinations.filter((element) => destination === element.id)[0].name : null;

  return (
    <div className={cn(lcs.eventFieldGroup, lcs.eventFieldGroupDestination)}>
      <label className={lcs.eventLabel} htmlFor="event-destination">{type}</label>
      <input className={cn(lcs.eventInput, lcs.eventInputDestination)} id="event-destination" type="text" name="event-destination" value={destinationName} list="destination-list" />
      <datalist id="destination-list">
        {mockDestinations.map((element) => (
          <option key={element.id} value={element.name}></option>
        ))}
      </datalist>
    </div>
  )
}
