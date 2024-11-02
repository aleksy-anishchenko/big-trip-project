import cn from 'classnames';
import lcs from './OfferDetails.module.scss';
import OfferSelector from '../offer-selector/OfferSelector';
import { mockOffers } from '../../../../mock/mockOffers';

export default function OffersDetails({ pointType, pointOffers }) {
  const matchingOffers = mockOffers.filter((offer) => offer.type === pointType)[0];

  return (
    <section className={cn(lcs.eventSection, lcs.eventSectionOffers)}>
      <h3 className={cn(lcs.eventSectionTitle, lcs.eventSectionTitleOffers)}>Offers</h3>
      <div className={lcs.eventAvailableOffers}>
        {matchingOffers.offers.map((offer) => (
          <OfferSelector key={offer.id} offer={offer} pointOffers={pointOffers} />
        ))}
      </div>
    </section>
  );
}
