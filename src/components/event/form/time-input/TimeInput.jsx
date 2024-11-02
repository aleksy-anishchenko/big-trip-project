import lcs from './TimeInput.module.scss';
import cn from 'classnames';
import { humanizePointDate } from '../../../../utils';

export default function TimeInput({dateType, dateFrom, dateTo}) {
  const dateFromValue = humanizePointDate(dateFrom, dateType.formatValue);
  const dateToValue = humanizePointDate(dateTo, dateType.formatValue);
  return (
    <div className={lcs.eventFieldGroup}>
      <label className="visually-hidden" htmlFor="event-start-time">From</label>
      <input className={cn(lcs.eventInput, lcs.eventInputTime)} id="event-start-time" type="text" name="event-start-time" value={dateFromValue} />
      &mdash;
      <label className="visually-hidden" htmlFor="event-end-time">To</label>
      <input className={cn(lcs.eventInput, lcs.eventInputTime)} id="event-end-time" type="text" name="event-end-time" value={dateToValue} />
    </div>
  )
}
