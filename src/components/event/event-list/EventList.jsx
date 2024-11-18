import lcs from './EventList.module.scss';
import { EMPTY_POINT } from '../../../data'
import { usePoints } from '../../../hooks/usePoints';
import PointItem from '../point/point-item/PointItem';
import PointEditForm from '../point/point-edit-form/PointEditForm';
import { useState } from 'react';

export default function EventList({activePointId, setActivePointId, isNewPoint, setIsNewPoint}) {
  const { points } = usePoints();
  const [eventsArray, setEventsArray] = useState(points);

  return (
    <ul className={lcs.tripEventsList}>
      {isNewPoint ? <PointEditForm key={EMPTY_POINT.id} point={EMPTY_POINT} onActivatePoint={setActivePointId} setEventsArray={setEventsArray} isNewPoint={isNewPoint} setIsNewPoint={setIsNewPoint} /> : null}
      {eventsArray.map((point) => (
        !isNewPoint && activePointId === point.id
          ? <PointEditForm key={point.id} point={point} onActivatePoint={setActivePointId} setEventsArray={setEventsArray}/>
          : <PointItem key={point.id} point={point} onActivatePoint={setActivePointId} setIsNewPoint={setIsNewPoint} />
      ))}
    </ul>
  )
}
