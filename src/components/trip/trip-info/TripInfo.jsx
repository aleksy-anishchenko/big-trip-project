import {useDestinations} from '../../../hooks/useDestinations.js';
import {humanizePointDate} from '../../../utils.js';
import {DateFormatType} from '../../../data.js';
import nc from 'classnames';
import lcs from './TripInfo.module.scss';

export default function TripInfo({points}) {
  const {getDestinationName} = useDestinations();

  const tripDestinationNames = points.map((item) => {
    return getDestinationName(item.destination);
  });

  const tripTitle = tripDestinationNames.length > 3 ?
    [tripDestinationNames.slice(0, 1), tripDestinationNames.slice(-1)[0]].join(' — ... — ')
    : tripDestinationNames.slice(0, 3).join(` — `);

  const totalValue = points.reduce((sum, item) => sum + item.basePrice, 0);

  const tripDates = [humanizePointDate(points[0].dateFrom, DateFormatType.EVENT_DATE.formatValue), humanizePointDate(points[points.length - 1].dateTo, DateFormatType.EVENT_DATE.formatValue)].join(' — ').toLowerCase();

  return (
    <section className={nc(lcs.tripMainTripInfo, lcs.tripInfo)}>
      <div className={lcs.tripInfoMain}>
        <h1 className={lcs.tripInfoTitle}>{tripTitle}</h1>
        <p className={lcs.tripInfoDates}>{tripDates}</p>
      </div>
      <p className={lcs.tripInfoCost}>
        Total: &euro;&nbsp;<span className={lcs.tripInfoCostValue}>{totalValue}</span>
      </p>
    </section>
  )
}
