import lcs from './SortList.module.scss';
import cn from 'classnames';
import SortItem from '../sort-item/SortItem';
import { SortingType } from '../../../data';

export default function SortList() {
  return (
    <form className={cn(lcs.tripEventsTripSort, lcs.tripSort)} action="#" method="get">
      {Object.entries(SortingType).map(([key, value]) => (
        <SortItem key={key} name={value.name} isDisabled={value.isDisabled} />
      ))}
    </form>
  );
}
