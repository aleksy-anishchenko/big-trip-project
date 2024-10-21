import { useState } from 'react';
import { DateFormat } from '../const';
import { eventIcons, availableDestinations, availableOffers } from '../data';
import { humanizePointDate, humanizePointDuration } from '../utils';
import EventOffers from './EventOffers';

export default function EventPoint({ basePrice, dateFrom, dateTo, destination, isFavorite, offers, type }) {
  const [isFavoriteState, setIsFavoriteState] = useState(isFavorite);
  const filteredOffers = availableOffers.find(offer => offer.type === type).offers.filter(offer => offers.includes(offer.id)) || [];

  function handleFavoriteToggle() {
    setIsFavoriteState(prevState => !prevState);
  }

  return (
    <li className="trip-events__item">
      <div className="event">
        <time className="event__date" dateTime={humanizePointDate(dateFrom, DateFormat.DATE_FORMAT)}>{humanizePointDate(dateFrom, DateFormat.MONTH_DATE_FORMAT)}</time>
        <div className="event__type">
          <img className="event__type-icon" width="42" height="42" src={eventIcons[type]} alt="Event type icon" />
        </div>
        <h3 className="event__title">{type} {destination ? availableDestinations.filter((element) => destination === element.id)[0].name : null}</h3>
        <div className="event__schedule">
          <p className="event__time">
            <time className="event__start-time" dateTime={humanizePointDate(dateFrom, DateFormat.DATE_TIME_FORMAT)}>{humanizePointDate(dateFrom, DateFormat.TIME_FORMAT)}</time>
            &mdash;
            <time className="event__end-time" dateTime={humanizePointDate(dateTo, DateFormat.DATE_TIME_FORMAT)}>{humanizePointDate(dateTo, DateFormat.TIME_FORMAT)}</time>
          </p>
          <p className="event__duration">{humanizePointDuration(dateFrom, dateTo)}</p>
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
          className={`event__favorite-btn ${isFavoriteState ? 'event__favorite-btn--active' : ''}`}
          onClick={handleFavoriteToggle}
          type="button"
        >
          <span className="visually-hidden">Add to favorite</span>
          <svg className="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
          </svg>
        </button>
        <button className="event__rollup-btn" type="button">
          <span className="visually-hidden">Open event</span>
        </button>
      </div>
    </li>
  )
}
