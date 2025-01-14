import {StrictMode, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {usePoints} from './hooks/usePoints';
import AppContext from './context.js';
import App from './App/App';
import './index.scss';

function Main() {
  const {points, setPoints} = usePoints();
  const [isNewPointDisabled, setIsNewPointDisabled] = useState(false);
  const [activePointId, setActivePointId] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('EVERYTHING');

  return (
    <StrictMode>
      <AppContext.Provider value={
        {
          pointArray: {points, setPoints},
          newPointDisabled: {isNewPointDisabled, setIsNewPointDisabled},
          activePoint: {activePointId, setActivePointId},
          filter: {selectedFilter, setSelectedFilter},
        }}>
        <App/>
      </AppContext.Provider>
    </StrictMode>
  )
}

createRoot(document.getElementById('root')).render(
  <Main/>,
)
