import lcs from './EventOffers.module.scss';

export default function EventOffers({ title, price }) {
  return (
    <li className={lcs.EventOffers}>
      <span className={lcs.EventOfferTitle}>{title}</span>
      <span className={lcs.eventOfferPrice}>+€&nbsp;{price}</span>
    </li>
  )
}
