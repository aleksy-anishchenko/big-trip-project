import lcs from './TimeInput.module.scss';
import cn from 'classnames';
import { useState } from "react";
import DateTimePicker from "flatpickr-react";
import "flatpickr/dist/flatpickr.css";
import { English } from "flatpickr/dist/l10n/default";

export default function TimeInput({dateType, dateFrom, dateTo, setPointState}) {
  const [stateDateFrom, setStateDateFrom] = useState(dateFrom);
  const [stateDateTo, setStateDateTo] = useState(dateTo);

  return (
    <div className={lcs.eventFieldGroup}>
      <label className="visually-hidden" htmlFor="event-start-time">From</label>
      <DateTimePicker
        className={cn(lcs.eventInput, lcs.eventInputTime)}
        id="event-start-time"
        name="event-start-time"
        options={{
          enableTime: true,
          dateFormat: dateType.formatValue,
          time_24hr: true,
          maxDate: stateDateTo,
          locale: English,
        }}
        value={stateDateFrom}
        onChange={(selectedDates) => {
          const isoFormattedDate = selectedDates[0].toISOString();
          setStateDateFrom(isoFormattedDate);
          setPointState((prevState) => ({
            ...prevState,
            dateFrom: isoFormattedDate,
          }));
        }}
      />
      &mdash;
      <label className="visually-hidden" htmlFor="event-end-time">To</label>
      <DateTimePicker
        className={cn(lcs.eventInput, lcs.eventInputTime)}
        id="event-end-time"
        name="event-end-time"
        options={{
          enableTime: true,
          dateFormat: dateType.formatValue,
          time_24hr: true,
          minDate: stateDateFrom,
          locale: English,
        }}
        value={stateDateTo}
        onChange={(selectedDates) => {
          const isoFormattedDate = selectedDates[0].toISOString();
          setStateDateTo(isoFormattedDate);
          setPointState((prevState) => ({
            ...prevState,
            dateTo: isoFormattedDate,
          }));
        }}
      />
    </div>
  )
}
