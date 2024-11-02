import cn from 'classnames';
import lcs from './PriceInput.module.scss';

export default function PriceInput({price}) {
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
      />
    </div>
  )
}
