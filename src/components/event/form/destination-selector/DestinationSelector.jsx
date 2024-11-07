import cn from 'classnames';
import { mockDestinations } from '../../../../mock/mockDestinations';
import lcs from './DestinationSelector.module.scss';
import { useState } from 'react';


export default function DestinationSelector({destination, type, setPointState}) {
  const [inputValue, setInputValue] = useState(
    destination ? mockDestinations.find((element) => destination === element.id)?.name || '' : ''
  );

  function handleDestinationСhange(evt) {
    const newDestination = mockDestinations.find((element) => element.name === evt.target.value);
    setPointState((point) => ({ ...point, destination: newDestination.id }));
    setInputValue(evt.target.value);
  }

  return (
    <div className={cn(lcs.eventFieldGroup, lcs.eventFieldGroupDestination)}>
      <label className={lcs.eventLabel} htmlFor="event-destination">{type}</label>
      <select
        className={cn(lcs.eventInput, lcs.eventInputDestination)}
        id="event-destination"
        name="event-destination"
        value={inputValue}
        onChange={handleDestinationСhange}
        required
      >
        {mockDestinations.map((element) => (
          <option key={element.id} value={element.name}>{element.name}</option>
        ))}
      </select>
    </div>
  )
}
