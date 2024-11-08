import IconBus from './assets/icons/bus.png';
import IconCheckIn from './assets/icons/check-in.png';
import IconDrive from './assets/icons/drive.png';
import IconFlight from './assets/icons/flight.png';
import IconRestaurant from './assets/icons/restaurant.png';
import IconShip from './assets/icons/ship.png';
import IconSightseeing from './assets/icons/sightseeing.png';
import IconTaxi from './assets/icons/taxi.png';
import IconTrain from './assets/icons/train.png';

const eventTypes = {
  'bus': { name: 'bus', icon: IconBus },
  'check-in': { name: 'check-in', icon: IconCheckIn },
  'drive': { name: 'drive', icon: IconDrive },
  'flight': { name: 'flight', icon: IconFlight },
  'restaurant': { name: 'restaurant', icon: IconRestaurant },
  'ship': { name: 'ship', icon: IconShip },
  'sightseeing': { name: 'sightseeing', icon: IconSightseeing },
  'taxi': { name: 'taxi', icon: IconTaxi },
  'train': { name: 'train', icon: IconTrain },
};

const FilterType = {
  EVERYTHING: 'EVERYTHING',
  FUTURE: 'FUTURE',
  PRESENT: 'PRESENT',
  PAST: 'PAST',
};

const SortingType = {
  DAY: { name: 'day', isDisabled: false },
  EVENT: { name: 'event', isDisabled: true },
  TIME: { name: 'time', isDisabled: false },
  PRICE: { name: 'price', isDisabled: false },
  OFFER: { name: 'offer', isDisabled: true },
};

const DateFormatType = {
  EVENT_DATE: { name: 'date', formatValue: 'MMM DD' },
  START_TIME: { name: 'startTime', formatValue: 'HH:mm' },
  END_TIME: { name: 'endTime', formatValue: 'HH:mm' },
  DATE_TIME_FORM_POINTS: { name: 'dateTimeFormPoints', formatValue: 'd/m/y H:i' },
};

export { eventTypes, FilterType, SortingType, DateFormatType };
