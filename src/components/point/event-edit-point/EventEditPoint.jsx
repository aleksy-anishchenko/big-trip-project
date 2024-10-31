import cn from 'classnames';
import { DateFormatType } from '../../../data';
import EventDetails from '../../event-details/EventDetails';
import EventTypeSelector from '../../event-type-selector/EventTypeSelector';
import EventDestinationSelector from '../../event-destination-selector/EventDestinationSelector';
import EventTimeInput from '../../event-time-input/EventTimeInput';
import EventPriceInput from '../../event-price-input/EventPriceInput';
import lcs from './EventEditPoint.module.scss';
import stylesPoint from '../../point/Point.module.scss';

export default function EventEditPoint({point, onActivatePoint}) {
  const { type, destination, basePrice, dateFrom, dateTo } = point;

  function handleRollupClick() {
    onActivatePoint('');
  }

  return (
    <li className={stylesPoint.tripEventsItem}>
      <form className={cn(stylesPoint.event, stylesPoint.eventEdit)} action="#" method="post">
        <header className={lcs.eventHeader}>

          <EventTypeSelector type={type} />

          <EventDestinationSelector destination={destination} type={type} />

          <EventTimeInput dateType={DateFormatType.DATE_TIME_FORM_POINTS} dateFrom={dateFrom} dateTo={dateTo}/>

          <EventPriceInput price={basePrice} />

          <button className={`${lcs.eventSaveBtn} btn btn--blue`} type="submit">Save</button>
          <button className={lcs.eventResetBtn} type="reset">Delete</button>
          <button
            className={stylesPoint.eventRollupBtn}
            type="button"
            onClick={handleRollupClick}
          >
            <span className="visually-hidden">Open event</span>
          </button>
        </header>

        <EventDetails />
      </form>
    </li>
  )
}
