import { useState } from 'react';
import { eventIcons, DateFormatType } from '../../data';
import { mockDestinations } from '../../mock/mockDestinations';
import { mockOffers } from '../../mock/mockOffers';
import { humanizePointDuration } from '../../utils';
import EventDateTime from '../event-date-time/EventDateTime';
import EventOffers from '../event-offers/EventOffers';
import './EventPoint.scss';

export default function EventPoint({point, onActivatePoint}) {
  const { id, type, destination, basePrice, dateFrom, dateTo, offers, isFavorite } = point;
  const [isFavoriteState, setIsFavoriteState] = useState(isFavorite);
  const destinationName = destination ? mockDestinations.filter((element) => destination === element.id)[0].name : null;
  const filteredOffers = mockOffers.find(offer => offer.type === type).offers.filter(offer => offers.includes(offer.id)) || [];
  const isFavoriteClassName = isFavoriteState ? 'event__favorite-btn event__favorite-btn--active' : 'event__favorite-btn';
  const duration = humanizePointDuration(dateFrom, dateTo);

  function handleRollupClick() {
    onActivatePoint(id);
  }

  function handleFavoriteToggle() {
    setIsFavoriteState(prevState => !prevState);
  }

  return (
    <li className='trip-events__item'>
      <div className="event">
        <EventDateTime date={dateFrom} dateType={DateFormatType.EVENT_DATE} />
        <div className="event__type">
          <img className="event__type-icon" width="42" height="42" src={eventIcons[type]} alt="Event type icon" />
        </div>
        <h3 className="event__title">{type} {destinationName}</h3>
        <div className="event__schedule">
          <p className="event__time">
            <EventDateTime date={dateFrom} dateType={DateFormatType.START_TIME} />
            &mdash;
            <EventDateTime date={dateTo} dateType={DateFormatType.END_TIME} />
          </p>
          <p className="event__duration">{duration}</p>
        </div>
        <p className="event__price">
          &euro;&nbsp;<span className="event__price-value">{basePrice}</span>
        </p>
        {filteredOffers.length > 0 ? (
          <>
            <h4 className="visually-hidden">Offers:</h4>
            <ul className="event__selected-offers">
              {filteredOffers.map((offer) => (
                <EventOffers
                  key={offer.id}
                  title={offer.title}
                  price={offer.price}
                />
              ))}
            </ul>
          </>
        ) : null}
        <button
          className={isFavoriteClassName}
          onClick={handleFavoriteToggle}
          type="button"
        >
          <span className="visually-hidden">Add to favorite</span>
          <svg className="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
          </svg>
        </button>
        <button
          className="event__rollup-btn"
          type="button"
          onClick={handleRollupClick}
        >
          <span className="visually-hidden">Open event</span>
        </button>
      </div>
    </li>
  )
}
