import style from './EventTimeInput.module.scss';
import { humanizePointDate } from '../../utils';

export default function EventTimeInput({dateType, dateFrom, dateTo}) {
  const dateFromValue = humanizePointDate(dateFrom, dateType.formatValue);
  const dateToValue = humanizePointDate(dateTo, dateType.formatValue);
  return (
    <div className={`${style['event__field-group']} ${style['event__field-group--time']}`}>
      <label className="visually-hidden" htmlFor="event-start-time-1">From</label>
      <input className={`${style['event__input']} ${style['event__input--time']}`} id="event-start-time-1" type="text" name="event-start-time" value={dateFromValue} />
      &mdash;
      <label className="visually-hidden" htmlFor="event-end-time-1">To</label>
      <input className={`${style['event__input']} ${style['event__input--time']}`} id="event-end-time-1" type="text" name="event-end-time" value={dateToValue} />
    </div>
  )
}
