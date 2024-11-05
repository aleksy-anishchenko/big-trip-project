import lcs from './PointDetails.module.scss';
import OfferDetails from '../offer-details/OfferDetails';
import DestinationDetails from '../destination-details/DestinationDetails';

export default function PointDetails({pointOffers, arrayOffers, destinationContent, setPointState}) {

  return (
    <section className={lcs.eventDetails}>
      {arrayOffers.length > 0 ? <OfferDetails pointOffers={pointOffers} arrayOffers={arrayOffers} setPointState={setPointState} /> : null}
      {destinationContent.description ? <DestinationDetails content={destinationContent} /> : null}
    </section>
  )
}
