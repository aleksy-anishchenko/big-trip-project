import {useState} from 'react';
import cn from 'classnames';
import {eventTypes, DateFormatType} from '../../../../data';
import {useDestinations} from '../../../../hooks/useDestinations';
import {useOffers} from '../../../../hooks/useOffers';
import {humanizePointDuration} from '../../../../utils';
import DateTime from '../../date-time/DateTime';
import OfferList from '../../offer-list/OfferList';
import lcs from './PointItem.module.scss';
import stylesPoint from '../Point.module.scss';

export default function EventPoint({point, onActivatePoint, setIsNewPointOpen}) {
  const {id, type, destination, basePrice, dateFrom, dateTo, offers, isFavorite} = point;
  const {getFilteredOffers} = useOffers();
  const {getDestinationName} = useDestinations();
  const [isFavoriteState, setIsFavoriteState] = useState(isFavorite);
  const destinationName = getDestinationName(destination);
  const filteredOffers = getFilteredOffers(type, offers);
  const duration = humanizePointDuration(dateFrom, dateTo);

  function handleRollupClick() {
    setIsNewPointOpen(false);
    onActivatePoint(id);
  }

  function handleFavoriteToggle() {
    setIsFavoriteState(prevState => !prevState);
  }

  return (
    <li className={stylesPoint.tripEventsItem}>
      <div className={stylesPoint.event}>
        <DateTime date={dateFrom} dateType={DateFormatType.EVENT_DATE}/>
        <div className={lcs.eventType}>
          <img className={lcs.eventTypeIcon} width="42" height="42" src={eventTypes[type].icon} alt="Event type icon"/>
        </div>
        <h3 className={lcs.eventTitle}>{type} {destinationName}</h3>
        <div className={lcs.eventSchedule}>
          <p className={lcs.eventTime}>
            <DateTime date={dateFrom} dateType={DateFormatType.START_TIME}/>
            &mdash;
            <DateTime date={dateTo} dateType={DateFormatType.END_TIME}/>
          </p>
          <p className={lcs.eventDuration}>{duration}</p>
        </div>
        <p className={lcs.eventPrice}>
          &euro;&nbsp;<span>{basePrice}</span>
        </p>
        {filteredOffers.length > 0 ? (
          <>
            <h4 className="visually-hidden">Offers:</h4>
            <ul className={lcs.eventSelectedOffers}>
              {filteredOffers.map((offer) => (
                <OfferList
                  key={offer.id}
                  title={offer.title}
                  price={offer.price}
                />
              ))}
            </ul>
          </>
        ) : null}
        <button
          className={cn(lcs.eventFavoriteBtn, {[lcs.eventFavoriteBtnActive]: isFavoriteState})}
          onClick={handleFavoriteToggle}
          type="button"
        >
          <span className="visually-hidden">Add to favorite</span>
          <svg className={lcs.eventFavoriteIcon} width="28" height="28" viewBox="0 0 28 28">
            <path
              d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
          </svg>
        </button>
        <button
          className={stylesPoint.eventRollupBtn}
          type="button"
          onClick={handleRollupClick}
        >
          <span className="visually-hidden">Open event</span>
        </button>
      </div>
    </li>
  )
}
