import SortList from '../components/sort/sort-list/SortList';
import FilterList from '../components/filter/filter-list/FilterList';
import EventList from '../components/event/event-list/EventList';
import NewPointButton from '../components/event/new-point-button/NewPointButton';
import { useState } from 'react';

import lcs from './App.module.scss';
import nc from 'classnames';

export default function App() {
  const [activePointId, setActivePointId] = useState('');
  const [isNewPoint, setIsNewPoint] = useState(false);

  return (
    <>
      <header className={lcs.pageHeader}>
        <div className={nc(lcs.pageBodyContainer, lcs.pageHeaderContainer)}>
          <img className={lcs.pageHeaderLogo} src="img/logo.png" width="42" height="42" alt="Trip logo" />
          <div className={lcs.tripMain}>
            <section className={nc(lcs.tripMainTripInfo, lcs.tripInfo)}>
              <div className={lcs.tripInfoMain}>
                <h1 className={lcs.tripInfoTitle}>Amsterdam &mdash; Chamonix &mdash; Geneva</h1>
                <p className={lcs.tripInfoDates}>18&nbsp;&mdash;&nbsp;20 Mar</p>
              </div>
              <p className={lcs.tripInfoCost}>
                Total: &euro;&nbsp;<span className={lcs.tripInfoCostValue}>1230</span>
              </p>
            </section>
            <div className={nc(lcs.tripMainTripControls, lcs.tripControls)}>
              <FilterList />
            </div>
            {isNewPoint ? <NewPointButton isDisabled={true} setIsNewPoint={setIsNewPoint} /> : <NewPointButton isDisabled={false} setIsNewPoint={setIsNewPoint} setActivePointId={setActivePointId} />}
          </div>
        </div>
      </header>
      <main className={nc(lcs.pageBodyPageMain, lcs.pageMain)}>
        <div className={lcs.pageBodyContainer}>
          <section className={lcs.tripEvents}>
          <h2 className="visually-hidden">Trip events</h2>
            <SortList />
            <EventList activePointId={activePointId} setActivePointId={setActivePointId} isNewPoint={isNewPoint} setIsNewPoint={setIsNewPoint}/>
          </section>
        </div>
      </main>
    </>
  )
}
