import cn from 'classnames';
import lcs from './DestinationDetails.module.scss';

export default function DestinationDetails({content}) {
  return (
    <section className={lcs.eventSection}>
      <h3 className={cn(lcs.eventSectionTitle, lcs.eventSectionTitleDestination)}>Destination</h3>
      <p className={lcs.eventDestinationDescription}>{content.description}</p>
    </section>
  )
}
