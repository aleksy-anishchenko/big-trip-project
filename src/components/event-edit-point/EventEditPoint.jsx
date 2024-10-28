import './EventEditPoint.scss';
import { DateFormatType } from '../../data';
import EventDetails from '../event-details/EventDetails';
import EventTypeSelector from '../event-type-selector/EventTypeSelector';
import EventDestinationSelector from '../event-destination-selector/EventDestinationSelector';
import EventTimeInput from '../event-time-input/EventTimeInput';
import EventPriceInput from '../event-price-input/EventPriceInput';

export default function EventEditPoint({point, onActivatePoint}) {
  const { type, destination, basePrice, dateFrom, dateTo } = point;

  function handleRollupClick() {
    onActivatePoint('');
  }

  return (
    <li className='trip-events__item'>
      <form className="event event--edit" action="#" method="post">
        <header className="event__header">

          <EventTypeSelector type={type} />

          <EventDestinationSelector destination={destination} type={type} />

          <EventTimeInput dateType={DateFormatType.DATE_TIME_FORM_POINTS} dateFrom={dateFrom} dateTo={dateTo}/>

          <EventPriceInput price={basePrice} />

          <button className="event__save-btn btn btn--blue" type="submit">Save</button>
          <button className="event__reset-btn" type="reset">Delete</button>
          <button
            className="event__rollup-btn"
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
