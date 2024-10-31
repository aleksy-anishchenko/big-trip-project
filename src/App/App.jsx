import SortList from '../components/sort/sort-list/SortList';
import FilterList from '../components/filter/filter-list/FilterList'
import EventList from '../components/event-list/EventList';
import lcs from './App.module.scss';
import nc from 'classnames'

export default function App() {
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
            <button className={`${lcs.tripMainEventAddBtn} btn btn--big btn--yellow`} type="button">New event</button>
          </div>
        </div>
      </header>
      <main className={nc(lcs.pageBodyPageMain, lcs.pageMain)}>
        <div className={lcs.pageBodyContainer}>
          <section className={lcs.tripEvents}>
          <h2 className="visually-hidden">Trip events</h2>
            <SortList />
            <EventList />
          </section>
        </div>
      </main>
    </>
  )
}
