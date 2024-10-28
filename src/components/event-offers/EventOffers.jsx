import './EventOffers.scss';

export default function EventOffers({ title, price }) {
  return (
    <li className="event__offer">
      <span className="event__offer-title">{title}</span>
      <span className="event__offer-price">+€&nbsp;{price}</span>
    </li>
  )
}
