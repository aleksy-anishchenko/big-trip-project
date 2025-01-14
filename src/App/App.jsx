import SortList from '../components/sort/sort-list/SortList';
import FilterList from '../components/filter/filter-list/FilterList';
import EventList from '../components/event/event-list/EventList';
import NewPointButton from '../components/event/new-point-button/NewPointButton';
import TripInfo from '../components/trip/trip-info/TripInfo.jsx';
import EmptyMessage from '../components/trip/empty-message/EmptyMessage.jsx';
import {useContext} from 'react';
import AppContext from '../context.js';

import lcs from './App.module.scss';
import nc from 'classnames';

export default function App() {
  const {pointArray, newPointDisabled, activePoint} = useContext(AppContext);
  const {points} = pointArray;
  const {isNewPointDisabled, setIsNewPointDisabled} = newPointDisabled;
  const {setActivePointId} = activePoint;

  function handleNewPointButtonClick() {
    if (isNewPointDisabled) {
      return;
    }
    setIsNewPointDisabled(true);
    setActivePointId('');
  }

  const hasPoints = points.length > 0;

  return (
    <>
      <header className={lcs.pageHeader}>
        <div className={nc(lcs.pageBodyContainer, lcs.pageHeaderContainer)}>
          <img className={lcs.pageHeaderLogo} src="img/logo.png" width="42" height="42" alt="Trip logo"/>
          <div className={lcs.tripMain}>
            {hasPoints && (
              <TripInfo/>
            )}
            <div className={nc(lcs.tripMainTripControls, lcs.tripControls)}>
              <FilterList/>
            </div>
            <NewPointButton onClick={handleNewPointButtonClick}/>
          </div>
        </div>
      </header>
      <main className={nc(lcs.pageBodyPageMain, lcs.pageMain)}>
        <div className={lcs.pageBodyContainer}>
          <section className={lcs.tripEvents}>
            <h2 className="visually-hidden">Trip events</h2>
            {hasPoints && (
              <>
                <SortList/>
                <EventList/>
              </>
            )}
            {!hasPoints && <EmptyMessage/>}
          </section>
        </div>
      </main>
    </>
  )
}
