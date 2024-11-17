import lcs from './NewPointButton.module.scss';

export default function NewPointButton({isDisabled, setIsNewPoint, setActivePointId}) {

  function handleButtonClick() {
    setActivePointId('');
    setIsNewPoint(true);
  }

  return (
    <button
    className={`${lcs.tripMainEventAddBtn} btn btn--big btn--yellow`}
    onClick={handleButtonClick}
    type="button"
    disabled={isDisabled}
  >
    New event
  </button>
  )
}
