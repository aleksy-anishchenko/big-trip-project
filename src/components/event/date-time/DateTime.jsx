import cn from 'classnames';
import lcs from './DateTime.module.scss';
import { humanizePointDate } from '../../../utils';

export default function DateTime({date, dateType}) {
  const dateValue = humanizePointDate(date, dateType.formatValue);

  return (
    <time className={cn({[lcs.eventDate]: dateType.name === 'date'})} dateTime={date}>
      {dateValue}
    </time>
  )
}
