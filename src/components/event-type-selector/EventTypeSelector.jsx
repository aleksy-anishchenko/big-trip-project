import './EventTypeSelector.scss';
import { eventIcons } from '../../data';

export default function EventTypeSelector({type}) {

  return (
    <div className="event__type-wrapper">
      <label className="event__type  event__type-btn" htmlFor="event-type-toggle-1">
        <span className="visually-hidden">Choose event type</span>
        <img className="event__type-icon" width="17" height="17" src={eventIcons[type]} alt="Event type icon" />
      </label>
      <input className="event__type-toggle visually-hidden" id="event-type-toggle-1" type="checkbox" />

      <div className="event__type-list">
        <fieldset className="event__type-group">
          <legend className="visually-hidden">Event type</legend>

          <div className="event__type-item">
            <input id="event-type-taxi-1" className="event__type-input visually-hidden" type="radio" name="event-type" value="taxi" />
            <label className="event__type-label  event__type-label--taxi" htmlFor="event-type-taxi-1">Taxi</label>
          </div>

          <div className="event__type-item">
            <input id="event-type-bus-1" className="event__type-input visually-hidden" type="radio" name="event-type" value="bus" />
            <label className="event__type-label  event__type-label--bus" htmlFor="event-type-bus-1">Bus</label>
          </div>

          <div className="event__type-item">
            <input id="event-type-train-1" className="event__type-input visually-hidden" type="radio" name="event-type" value="train" />
            <label className="event__type-label  event__type-label--train" htmlFor="event-type-train-1">Train</label>
          </div>

          <div className="event__type-item">
            <input id="event-type-ship-1" className="event__type-input visually-hidden" type="radio" name="event-type" value="ship" />
            <label className="event__type-label event__type-label--ship" htmlFor="event-type-ship-1">Ship</label>
          </div>

          <div className="event__type-item">
            <input id="event-type-drive-1" className="event__type-input visually-hidden" type="radio" name="event-type" value="drive" />
            <label className="event__type-label event__type-label--drive" htmlFor="event-type-drive-1">Drive</label>
          </div>

          <div className="event__type-item">
            <input id="event-type-flight-1" className="event__type-input visually-hidden" type="radio" name="event-type" value="flight" checked />
            <label className="event__type-label event__type-label--flight" htmlFor="event-type-flight-1">Flight</label>
          </div>

          <div className="event__type-item">
            <input id="event-type-check-in-1" className="event__type-input visually-hidden" type="radio" name="event-type" value="check-in" />
            <label className="event__type-label event__type-label--check-in" htmlFor="event-type-check-in-1">Check-in</label>
          </div>

          <div className="event__type-item">
            <input id="event-type-sightseeing-1" className="event__type-input visually-hidden" type="radio" name="event-type" value="sightseeing" />
            <label className="event__type-label event__type-label--sightseeing" htmlFor="event-type-sightseeing-1">Sightseeing</label>
          </div>

          <div className="event__type-item">
            <input id="event-type-restaurant-1" className="event__type-input visually-hidden" type="radio" name="event-type" value="restaurant" />
            <label className="event__type-label event__type-label--restaurant" htmlFor="event-type-restaurant-1">Restaurant</label>
          </div>
        </fieldset>
      </div>
    </div>
  )
}
