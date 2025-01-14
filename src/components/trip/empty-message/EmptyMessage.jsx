import lcs from './EmptyMessage.module.scss';
import {EmptyListMessage} from '../../../data.js'
import AppContext from '../../../context.js';
import {useContext} from "react";

export default function EmptyMessage() {
  const {filter} = useContext(AppContext);
  const {selectedFilter} = filter;
  const message = EmptyListMessage[selectedFilter];
  
  return (
    <p className={lcs.tripEventsMsg}>{message}</p>
  )
}
