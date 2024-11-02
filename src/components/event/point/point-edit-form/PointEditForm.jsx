import cn from 'classnames';
import { DateFormatType } from '../../../../data';
import { mockDestinations } from '../../../../mock/mockDestinations';
import TypeSelector from '../../../event/form/type-selector/TypeSelector';
import DestinationSelector from '../../../event/form/destination-selector/DestinationSelector';
import TimeInput from '../../form/time-input/TimeInput';
import PriceInput from '../../form/price-input/PriceInput';
import PointDetails from '../../form/point-details/PointDetails';
import lcs from './PointEditForm.module.scss';
import stylesPoint from '../../point/Point.module.scss';

export default function PointEditForm({point, onActivatePoint}) {
  const { type, destination, basePrice, dateFrom, dateTo, offers } = point;
  const pointDestination = mockDestinations.find((element) => destination === element.id);
  const isDestination = mockDestinations.some((element) => destination === element.id && element.description !== '');
  console.log(point);
  console.log(offers.lenght > 0);
  console.log(isDestination);

  function handleRollupClick() {
    onActivatePoint('');
  }

  return (
    <li className={stylesPoint.tripEventsItem}>
      <form className={cn(stylesPoint.event, stylesPoint.eventEdit)} action="#" method="post">
        <header className={lcs.eventHeader}>

          <TypeSelector type={type} />

          <DestinationSelector destination={destination} type={type} />

          <TimeInput dateType={DateFormatType.DATE_TIME_FORM_POINTS} dateFrom={dateFrom} dateTo={dateTo}/>

          <PriceInput price={basePrice} />

          <button className={`${lcs.eventSaveBtn} btn btn--blue`} type="submit">Save</button>
          <button className={lcs.eventResetBtn} type="reset">Delete</button>
          <button
            className={stylesPoint.eventRollupBtn}
            type="button"
            onClick={handleRollupClick}
          >
            <span className="visually-hidden">Open event</span>
          </button>
        </header>
        {(isDestination || offers.lenght > 0)
        ? <PointDetails pointType={type} pointOffers={offers} destinationContent={pointDestination} />
        : null}
      </form>
    </li>
  )
}
