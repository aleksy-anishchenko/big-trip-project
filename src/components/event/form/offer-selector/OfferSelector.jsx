import lcs from './OfferSelector.module.scss';

export default function OfferSelector({offer, pointOffers}) {
  console.log(pointOffers);
  const isChecked = pointOffers.includes(offer.id);

  return (
    <div className={lcs.eventOfferSelector}>
      <input
        className={`${lcs.eventOfferCheckbox} visually-hidden`}
        id={`event-offer-${offer.id}`}
        type="checkbox"
        name={`event-offer-${offer.id}`}
        checked={isChecked}
        onChange={() => {}}
      />
      <label className={lcs.eventOfferLabel} htmlFor={`event-offer-${offer.id}`}>
        <span>{offer.title}</span>
        <span>+€&nbsp;{offer.price}</span>
      </label>
    </div>
  )
}
