import style from './EventDateTime.module.scss';
import { humanizePointDate } from '../../utils';

export default function EventDateTime({date, dateType}) {
  const dateValue = humanizePointDate(date, dateType.formatValue);
  const classNameValue = dateType.name === 'date' ? style['event__date'] : null;

  return (
    <time className={classNameValue} dateTime={date}>
      {dateValue}
    </time>
  )
}
