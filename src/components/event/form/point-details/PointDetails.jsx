import lcs from './PointDetails.module.scss';
import OfferDetails from '../offer-details/OfferDetails';
import DestinationDetails from '../destination-details/DestinationDetails';

export default function PointDetails({pointType, pointOffers, destinationContent}) {
  return (
    <section className={lcs.eventDetails}>
      {pointOffers.length > 0 ? <OfferDetails pointType={pointType} pointOffers={pointOffers} /> : null}
      {destinationContent.description ? <DestinationDetails content={destinationContent} /> : null}
    </section>
  )
}
