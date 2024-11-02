import lcs from './EventList.module.scss';
import { mockPoints } from '../../../mock/mockPoints';
import PointItem from '../point/point-item/PointItem';
import PointEditForm from '../point/point-edit-form/PointEditForm';
import { useState } from 'react';

export default function EventList() {
  const events = mockPoints;
  const [activePointId, setActivePointId] = useState('');

  return (
    <ul className={lcs.tripEventsList}>
      {events.map((point) => (
        activePointId === point.id
          ? <PointEditForm key={point.id} point={point} onActivatePoint={setActivePointId} />
          : <PointItem key={point.id} point={point} onActivatePoint={setActivePointId} />
      ))}
    </ul>
  )
}
