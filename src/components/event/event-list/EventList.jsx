import lcs from './EventList.module.scss';
import {EMPTY_POINT} from '../../../data';
import PointItem from '../point/point-item/PointItem';
import PointEditForm from '../point/point-edit-form/PointEditForm';

import AppContext from '../../../context.js';
import {useContext} from 'react';

export default function EventList() {
  const {pointArray, newPointDisabled, activePoint} = useContext(AppContext);
  const {points} = pointArray;
  const {isNewPointDisabled} = newPointDisabled;
  const {activePointId} = activePoint;

  return (
    <ul className={lcs.tripEventsList}>
      {isNewPointDisabled && <PointEditForm point={EMPTY_POINT}/>}
      {points.map((point) => (
        !isNewPointDisabled && activePointId === point.id
          ? <PointEditForm key={point.id} point={point}/>
          : <PointItem key={point.id} point={point}/>
      ))}
    </ul>
  )
}
