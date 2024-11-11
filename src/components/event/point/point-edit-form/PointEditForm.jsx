import cn from 'classnames';
import { DateFormatType } from '../../../../data';
import { useDestinations } from '../../../../hooks/useDestinations';
import { mockOffers } from '../../../../mock/mockOffers';
import TypeSelector from '../../../event/form/type-selector/TypeSelector';
import DestinationSelector from '../../../event/form/destination-selector/DestinationSelector';
import TimeInput from '../../form/time-input/TimeInput';
import PriceInput from '../../form/price-input/PriceInput';
import PointDetails from '../../form/point-details/PointDetails';
import lcs from './PointEditForm.module.scss';
import stylesPoint from '../../point/Point.module.scss';
import { useState } from 'react';

export default function PointEditForm({point, onActivatePoint, setEventsArray}) {
  const { getDestinationById, isDestination } = useDestinations();
  const [pointState, setPointState] = useState(point);
  const { id, type, destination, basePrice, dateFrom, dateTo, offers } = pointState;
  const pointDestination = getDestinationById(destination);
  const matchingOffers = mockOffers.filter((offer) => offer.type === type)[0].offers;

  function handleRollupClick() {
    onActivatePoint('');
  }

  function handleDeleteClick() {
    setEventsArray((eventsArray) => eventsArray.filter((event) => event.id !== id));
  }

  function handleFormSubmit(evt) {
    evt.preventDefault();
    setEventsArray((eventsArray) => eventsArray.map((event) => event.id === id ? pointState : event));
    onActivatePoint('');
  }

  return (
    <li className={stylesPoint.tripEventsItem}>
      <form className={cn(stylesPoint.event, stylesPoint.eventEdit)} action="#" method="post">
        <header className={lcs.eventHeader}>

          <TypeSelector type={type} setPointState={setPointState} />

          <DestinationSelector destination={destination} type={type} setPointState={setPointState} />

          <TimeInput dateType={DateFormatType.DATE_TIME_FORM_POINTS} dateFrom={dateFrom} dateTo={dateTo} setPointState={setPointState}  />

          <PriceInput price={basePrice} setPointState={setPointState} />

          <button className={cn(lcs.eventSaveBtn, 'btn', 'btn--blue')} type="submit" onClick={handleFormSubmit}>Save</button>
          <button className={lcs.eventResetBtn} type="reset" onClick={handleDeleteClick}>Delete</button>
          <button
            className={stylesPoint.eventRollupBtn}
            type="button"
            onClick={handleRollupClick}
          >
            <span className="visually-hidden">Open event</span>
          </button>
        </header>
        {(isDestination(destination) || matchingOffers.length > 0)
        ? <PointDetails pointOffers={offers} arrayOffers={matchingOffers} destinationContent={pointDestination} setPointState={setPointState} />
        : null}
      </form>
    </li>
  )
}
