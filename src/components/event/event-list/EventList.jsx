import lcs from './EventList.module.scss';
import {EMPTY_POINT} from '../../../data';
import PointItem from '../point/point-item/PointItem';
import PointEditForm from '../point/point-edit-form/PointEditForm';

export default function EventList({
                                    activePointId,
                                    setActivePointId,
                                    isNewPointOpen,
                                    setIsNewPointOpen,
                                    points,
                                    setPoints
                                  }) {

  return (
    <ul className={lcs.tripEventsList}>
      {isNewPointOpen && <PointEditForm point={EMPTY_POINT} onActivatePoint={setActivePointId} setPoints={setPoints}
                                        isNewPointOpen={isNewPointOpen} setIsNewPointOpen={setIsNewPointOpen}/>}
      {points.map((point) => (
        !isNewPointOpen && activePointId === point.id
          ? <PointEditForm key={point.id} point={point} onActivatePoint={setActivePointId} setPoints={setPoints}/>
          : <PointItem key={point.id} point={point} onActivatePoint={setActivePointId}
                       setIsNewPointOpen={setIsNewPointOpen}/>
      ))}
    </ul>
  )
}
