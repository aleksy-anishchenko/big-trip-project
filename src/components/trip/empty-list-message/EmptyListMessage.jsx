import lcs from './DateTime.module.scss';

export default function EmptyListMessage({message}) {
  return (
    <p className={lcs.tripEventsMsg}>{message}</p>
  )
}
