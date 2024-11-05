import cn from 'classnames';
import lcs from './PriceInput.module.scss';

export default function PriceInput({price, setPointState}) {

  function handlePriceChange(evt) {
    const numericValue = evt.target.value.replace(/\D/g, '') || 0;
    setPointState((point) => ({ ...point, basePrice: numericValue }));
  }

  return (
    <div className={lcs.eventFieldGroup}>
      <label className={lcs.eventLabel} htmlFor="event-price">
        <span className="visually-hidden">Price</span>
        &euro;
      </label>
      <input
        className={cn(lcs.eventInput, lcs.eventInputPrice)}
        id="event-price"
        type="text"
        name="event-price"
        value={price}
        onChange={handlePriceChange}
      />
    </div>
  )
}
