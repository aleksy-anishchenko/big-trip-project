const DateFormat = {
  DATE_FORMAT: 'YYYY-MM-DD',
  DATE_TIME_FORMAT: 'YYYY-MM-DDTHH:mm',
  DATE_TIME_FORM_POINTS: 'd/m/y H:i',
  MONTH_DATE_FORMAT: 'MMM DD',
  TIME_FORMAT: 'HH:mm',
};

const FilterType = {
  EVERYTHING: 'EVERYTHING',
  FUTURE: 'FUTURE',
  PRESENT: 'PRESENT',
  PAST: 'PAST',
};

const SortingType = {
  DAY: {name: 'day', isDisabled: false, isChecked: true},
  EVENT: {name: 'event', isDisabled: true, isChecked: false},
  TIME: {name: 'time', isDisabled: false, isChecked: false},
  PRICE: {name: 'price', isDisabled: false, isChecked: false},
  OFFER: {name: 'offer', isDisabled: true, isChecked: false},
};

export { DateFormat, FilterType, SortingType };
