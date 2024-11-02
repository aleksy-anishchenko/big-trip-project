import cn from 'classnames';
import { eventTypes } from '../../../../data';
import TypeList from '../type-list/TypeList';
import lcs from'./TypeSelector.module.scss';

export default function TypeSelector({type}) {

  return (
    <div className={lcs.eventTypeWrapper}>
      <label className={cn(lcs.eventType, lcs.eventTypeBtn)} htmlFor="event-type-toggle">
        <span className="visually-hidden">Choose event type</span>
        <img className={lcs.eventTypeIcon} width="17" height="17" src={eventTypes[type].icon} alt="Event type icon" />
      </label>
      <input className={`${lcs.eventTypeToggle} visually-hidden`} id="event-type-toggle" type="checkbox" />

      <div className={lcs.eventTypeList}>
        <fieldset className={lcs.eventTypeGroup}>
          <legend className="visually-hidden">Event type</legend>
          {Object.entries(eventTypes).map(([key, value]) => (
            <TypeList key={key} type={value} />
          ))}
        </fieldset>
      </div>
    </div>
  )
}
