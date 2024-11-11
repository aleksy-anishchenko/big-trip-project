import lcs from './EventList.module.scss';
import { usePoints } from '../../../Hooks/usePoints';
import PointItem from '../point/point-item/PointItem';
import PointEditForm from '../point/point-edit-form/PointEditForm';
import { useState } from 'react';

export default function EventList() {
  const { points } = usePoints();
  const [eventsArray, setEventsArray] = useState(points);
  const [activePointId, setActivePointId] = useState('');

  return (
    <ul className={lcs.tripEventsList}>
      {eventsArray.map((point) => (
        activePointId === point.id
          ? <PointEditForm key={point.id} point={point} onActivatePoint={setActivePointId} setEventsArray={setEventsArray}/>
          : <PointItem key={point.id} point={point} onActivatePoint={setActivePointId} />
      ))}
    </ul>
  )
}
