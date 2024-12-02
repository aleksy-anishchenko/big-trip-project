import lcs from './NewPointButton.module.scss';

export default function NewPointButton({isDisabled, onClick}) {

  function handleButtonClick() {
    onClick && onClick();
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
