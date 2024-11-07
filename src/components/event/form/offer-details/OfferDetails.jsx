import cn from 'classnames';
import lcs from './OfferDetails.module.scss';
import OfferSelector from '../offer-selector/OfferSelector';

export default function OffersDetails({ arrayOffers, pointOffers, setPointState }) {

  return (
    <section className={cn(lcs.eventSection, lcs.eventSectionOffers)}>
      <h3 className={cn(lcs.eventSectionTitle, lcs.eventSectionTitleOffers)}>Offers</h3>
      <div className={lcs.eventAvailableOffers}>
        {arrayOffers.map((offer) => (
          <OfferSelector key={offer.id} offer={offer} pointOffers={pointOffers} setPointState={setPointState} />
        ))}
      </div>
    </section>
  );
}
