import lcs from './NewPointButton.module.scss';
import {useContext} from 'react';
import AppContext from '../../../context.js';

export default function NewPointButton({onClick}) {
  const {newPointDisabled} = useContext(AppContext);
  const {isNewPointDisabled} = newPointDisabled;

  function handleButtonClick() {
    onClick && onClick();
  }

  return (
    <button
      className={`${lcs.tripMainEventAddBtn} btn btn--big btn--yellow`}
      onClick={handleButtonClick}
      type="button"
      disabled={isNewPointDisabled}
    >
      New event
    </button>
  )
}
