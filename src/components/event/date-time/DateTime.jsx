import lcs from './DateTime.module.scss';
import { humanizePointDate } from '../../../utils';

export default function DateTime({date, dateType}) {
  const dateValue = humanizePointDate(date, dateType.formatValue);
  const classNameValue = dateType.name === 'date' ? lcs.eventDate : null;

  return (
    <time className={classNameValue} dateTime={date}>
      {dateValue}
    </time>
  )
}
