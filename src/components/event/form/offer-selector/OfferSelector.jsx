import lcs from './OfferSelector.module.scss';

export default function OfferSelector({offer, pointOffers, setPointState}) {
  const isChecked = pointOffers.includes(offer.id);

  function handleCheckboxChange(evt) {
    setPointState((point) => ({
      ...point,
      offers: evt.target.checked ? [...point.offers, offer.id] : point.offers.filter((id) => id !== offer.id)
    }));
  };

  return (
    <div className={lcs.eventOfferSelector}>
      <input
        className={`${lcs.eventOfferCheckbox} visually-hidden`}
        id={`event-offer-${offer.id}`}
        type="checkbox"
        name={`event-offer-${offer.id}`}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label className={lcs.eventOfferLabel} htmlFor={`event-offer-${offer.id}`}>
        <span>{offer.title}</span>
        <span>+€&nbsp;{offer.price}</span>
      </label>
    </div>
  )
}
