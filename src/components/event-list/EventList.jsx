import lcs from './EventList.module.scss';
import { mockPoints } from '../../mock/mockPoints';
import EventPoint from '../point/event-point/EventPoint';
import EventEditPoint from '../point/event-edit-point/EventEditPoint';
import { useState } from 'react';

export default function EventList() {
  const events = mockPoints;
  const [activePointId, setActivePointId] = useState('');

  return (
    <ul className={lcs.tripEventsList}>
      {events.map((point) => (
        activePointId === point.id
          ? <EventEditPoint key={point.id} point={point} onActivatePoint={setActivePointId} />
          : <EventPoint key={point.id} point={point} onActivatePoint={setActivePointId} />
      ))}
    </ul>
  )
}
