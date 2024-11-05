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
    if (newDestination) {
      setPointState((point) => ({ ...point, destination: newDestination.id }));
    }
    setInputValue(evt.target.value);
  }

  return (
    <div className={cn(lcs.eventFieldGroup, lcs.eventFieldGroupDestination)}>
      <label className={lcs.eventLabel} htmlFor="event-destination">{type}</label>
      <input
        className={cn(lcs.eventInput, lcs.eventInputDestination)}
        id="event-destination"
        type="text"
        name="event-destination"
        value={inputValue}
        list="destination-list"
        onChange={handleDestinationСhange}
      />
      <datalist id="destination-list">
        {mockDestinations.map((element) => (
          <option key={element.id} value={element.name}></option>
        ))}
      </datalist>
    </div>
  )
}
