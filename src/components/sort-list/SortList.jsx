import style from './SortList.module.scss';
import SortItem from '../sort-item/SortItem';
import { SortingType } from '../../data';

export default function SortList() {
  return (
    <form className={`${style['trip-events__trip-sort']} ${style['trip-sort']}`} action="#" method="get">
      {Object.entries(SortingType).map(([key, value]) => (
        <SortItem key={key} name={value.name} isDisabled={value.isDisabled} />
      ))}
    </form>
  );
}
