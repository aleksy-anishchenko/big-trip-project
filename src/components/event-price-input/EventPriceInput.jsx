import './EventPriceInput.scss';

export default function EventPriceInput({price}) {
  return (
    <div className="event__field-group event__field-group--price">
      <label className="event__label" htmlFor="event-price-1">
        <span className="visually-hidden">Price</span>
        &euro;
      </label>
      <input className="event__input event__input--price" id="event-price-1" type="text" name="event-price" value={price} />
    </div>
  )
}
