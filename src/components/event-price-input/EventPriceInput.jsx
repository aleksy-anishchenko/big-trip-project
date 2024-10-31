import './EventPriceInput.scss';

export default function EventPriceInput({price}) {
  return (
    <div className="event__field-group">
      <label className="event__label" htmlFor="event-price">
        <span className="visually-hidden">Price</span>
        &euro;
      </label>
      <input className="event__input event__input--price" id="event-price" type="text" name="event-price" value={price} />
    </div>
  )
}
