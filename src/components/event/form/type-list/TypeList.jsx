import lcs from './TypeList.module.scss';
import cn from 'classnames';
import { capitalizeFirstLetter } from '../../../../utils';

function getTypeLabelClassName(typeItem) {
  const baseClass = lcs.eventTypeLabel;
  switch (typeItem) {
    case 'taxi':
      return cn(baseClass, lcs.eventTypeLabelTaxi);
    case 'bus':
      return cn(baseClass, lcs.eventTypeLabelBus);
    case 'train':
      return cn(baseClass, lcs.eventTypeLabelTrain);
    case 'ship':
      return cn(baseClass, lcs.eventTypeLabelShip);
    case 'drive':
      return cn(baseClass, lcs.eventTypeLabelDrive);
    case 'flight':
      return cn(baseClass, lcs.eventTypeLabelFlight);
    case 'check-in':
      return cn(baseClass, lcs.eventTypeLabelCheckIn);
    case 'sightseeing':
      return cn(baseClass, lcs.eventTypeLabelSightseeing);
    case 'restaurant':
      return cn(baseClass, lcs.eventTypeLabelRestaurant);
    default:
      return baseClass;
  }
}

export default function TypeList({type, isChecked, onChange}) {
  const typeName = capitalizeFirstLetter(type.name);
  const labelClassName = getTypeLabelClassName(type.name);

  return (
    <div className={lcs.eventTypeItem}>
      <input
        id={`event-type-${type.name}`}
        className={cn(lcs.eventTypeInput, 'visually-hidden')}
        type="radio"
        name="event-type"
        value={type.name}
        checked={isChecked}
        onChange={onChange}
      />
      <label className={labelClassName} htmlFor={`event-type-${type.name}`}>
        {typeName}
      </label>
    </div>
  )
}
