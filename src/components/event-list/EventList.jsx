import style from './eventList.module.scss';
import { mockPoints } from '../../mock/mockPoints';
import EventPoint from '../event-point/EventPoint';
import EventEditPoint from '../event-edit-point/EventEditPoint';
import { useState } from 'react';

export default function EventList() {
  const events = mockPoints;
  const [activePointId, setActivePointId] = useState('');

  return (
    <ul className={style['trip-events__list']}>
      {events.map((point) => (
        activePointId === point.id
          ? <EventEditPoint key={point.id} point={point} onActivatePoint={setActivePointId} />
          : <EventPoint key={point.id} point={point} onActivatePoint={setActivePointId} />
      ))}
    </ul>
  )
}
