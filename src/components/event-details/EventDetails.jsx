import './EventDetails.scss';

export default function EventDetails() {
  return (
    <section className="event__details">
      <section className="event__section event__section--offers">
        <h3 className="event__section-title event__section-title--offers">Offers</h3>

        <div className="event__available-offers">
          <div className="event__offer-selector">
            <input className="event__offer-checkbox visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked />
            <label className="event__offer-label" htmlFor="event-offer-luggage-1">
              <span className="event__offer-title">Add luggage</span>
              &plus;&euro;&nbsp;
              <span className="event__offer-price">50</span>
            </label>
          </div>

          <div className="event__offer-selector">
            <input className="event__offer-checkbox visually-hidden" id="event-offer-comfort-1" type="checkbox" name="event-offer-comfort" checked />
            <label className="event__offer-label" htmlFor="event-offer-comfort-1">
              <span className="event__offer-title">Switch to comfort</span>
              &plus;&euro;&nbsp;
              <span className="event__offer-price">80</span>
            </label>
          </div>

          <div className="event__offer-selector">
            <input className="event__offer-checkbox visually-hidden" id="event-offer-meal-1" type="checkbox" name="event-offer-meal" />
            <label className="event__offer-label" htmlFor="event-offer-meal-1">
              <span className="event__offer-title">Add meal</span>
              &plus;&euro;&nbsp;
              <span className="event__offer-price">15</span>
            </label>
          </div>

          <div className="event__offer-selector">
            <input className="event__offer-checkbox visually-hidden" id="event-offer-seats-1" type="checkbox" name="event-offer-seats" />
            <label className="event__offer-label" htmlFor="event-offer-seats-1">
              <span className="event__offer-title">Choose seats</span>
              &plus;&euro;&nbsp;
              <span className="event__offer-price">5</span>
            </label>
          </div>

          <div className="event__offer-selector">
            <input className="event__offer-checkbox visually-hidden" id="event-offer-train-1" type="checkbox" name="event-offer-train" />
            <label className="event__offer-label" htmlFor="event-offer-train-1">
              <span className="event__offer-title">Travel by train</span>
              &plus;&euro;&nbsp;
              <span className="event__offer-price">40</span>
            </label>
          </div>
        </div>
      </section>

      <section className="event__section  event__section--destination">
        <h3 className="event__section-title event__section-title--destination">Destination</h3>
        <p className="event__destination-description">Chamonix-Mont-Blanc (usually shortened to Chamonix) is a resort area near the junction of France, Switzerland and Italy. At the base of Mont Blanc, the highest summit in the Alps, it&apos;s renowned for its skiing.</p>
      </section>
    </section>
  )
}
