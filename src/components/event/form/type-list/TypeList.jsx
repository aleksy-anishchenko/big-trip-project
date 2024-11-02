import lcs from './TypeList.module.scss';
import { capitalizeFirstLetter } from '../../../../utils';

export default function TypeList({type}) {
  const typeName = capitalizeFirstLetter(type.name);

  return (
    <div className={lcs.eventTypeItem}>
      <input
        id={`event-type-${type.name}`}
        className={`${lcs.eventTypeInput} visually-hidden`}
        type="radio" name="event-type" value={type.name}
      />
      <label className={`event__type-label event__type-label--${type.name}`} htmlFor={`event-type-${type.name}`}>
        {typeName}
      </label>
    </div>
  )
}
