export default function EventOffers({ title, price }) {
  return (
    <li className="event__offer">
      <span className="event__offer-title">{title}</span>
      <span className="event__offer-price">{' +€ ' + price}</span>
    </li>
  )
}
