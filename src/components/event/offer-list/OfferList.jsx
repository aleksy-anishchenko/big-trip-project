import lcs from './OfferList.module.scss';

export default function OfferList({ title, price }) {
  return (
    <li className={lcs.EventOffers}>
      <span className={lcs.EventOfferTitle}>{title}</span>
      <span className={lcs.eventOfferPrice}>+€&nbsp;{price}</span>
    </li>
  )
}
