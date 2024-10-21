import IconBus from './assets/icons/bus.png';
import IconCheckIn from './assets/icons/check-in.png';
import IconDrive from './assets/icons/drive.png';
import IconFlight from './assets/icons/flight.png';
import IconRestaurant from './assets/icons/restaurant.png';
import IconShip from './assets/icons/ship.png';
import Sightseeing from './assets/icons/sightseeing.png';
import IconTaxi from './assets/icons/taxi.png';
import IconTrain from './assets/icons/train.png';
import IconTransport from './assets/icons/transport.png';

const eventIcons = {
  'bus': IconBus,
  'check-in': IconCheckIn,
  'drive': IconDrive,
  'flight': IconFlight,
  'restaurant': IconRestaurant,
  'ship': IconShip,
  'sightseeing': Sightseeing,
  'taxi': IconTaxi,
  'train': IconTrain,
  'transport': IconTransport,
};

const availableDestinations = [
  {
    id: 'ddd5dd55-d5dd-5dd55-d55d-5d555d555d55',
    description: 'Rome is the capital and largest city of Italy',
    name: 'Roma',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=882',
        description: 'This amphitheater is one of the best preserved and most grandiose structures of Antiquity'
      },
      {
        src: 'https://loremflickr.com/248/152?random=571',
        description: 'Vatican City is a sovereign city-state inside Rome in central Italy'
      },
      {
        src: 'https://loremflickr.com/248/152?random=191',
        description: 'The Sistine Chapel is a great legacy of Italian art, which has long been imperishable.'
      }
    ]
  },
  {
    id: 'ccc4cc44-c4cc-4cc44-c44c-4c444c444c44',
    description: 'Milan is a business center, the capital of world fashion and a city with a rich history.',
    name: 'Milan',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=195',
        description: 'Castello Sforzesco'
      },
      {
        src: 'https://loremflickr.com/248/152?random=989',
        description: 'Milan Cathedral'
      },
      {
        src: 'https://loremflickr.com/248/152?random=557',
        description: 'Brera Botanical Garden'
      }
    ]
  },
  {
    id: 'fff6ff66-f6ff-6f66-f66f-6f666f666f66',
    description: 'Palermo, a city in southern Italy, the administrative center of the Sicily region.',
    name: 'Palermo',
    pictures: []
  },
  {
    id: 'hhh7hh77-h7hh-7h77-h77h-7h777h777h77',
    description: 'Venice is a historic city in northern Italy, famous for its canals, gondolas, palazzi, ancient temples and museums.',
    name: 'Venice',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=122',
        description: 'Grand Canal'
      },
      {
        src: 'https://loremflickr.com/248/152?random=155',
        description: 'St Marks Campanile'
      },
      {
        src: 'https://loremflickr.com/248/152?random=124',
        description: 'Bridge of Sighs'
      }
    ]
  },
  {
    id: 'ppp8pp88-p8pp-8h88-h88h-8h888h888h88',
    description: 'Verona is an ancient corner of Veneto, which is known as one of the most romantic places in the world thanks to the tragedy "Romeo and Juliet" by William Shakespeare.',
    name: 'Verona',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=881',
        description: 'Palazzo Maffei'
      },
      {
        src: 'https://loremflickr.com/248/152?random=564',
        description: 'Scaliger Tombs'
      },
      {
        src: 'https://loremflickr.com/248/152?random=882',
        description: 'Basilica of San Zeno'
      }
    ]
  },
];

const availableOffers = [
  {
    type: 'train',
    offers: [
      {
        id: 'x7x7x7x7-7777-77xx-x777-x777777xxx77',
        title: 'Switch to comfort',
        price: 50
      },
      {
        id: 'j1j1j1j1-1111-11jj-j111-j111111jjj11',
        title: 'Add luggage',
        price: 20
      },
    ]
  },
  {
    type: 'drive',
    offers: [
      {
        id: 'j9j9j9j9-9999-99jj-j999-j999999jjj99',
        title: 'Order Uber',
        price: 20
      },
      {
        id: 'j1j1j1j1-1111-11jj-j111-j111111jjj11',
        title: 'Add luggage',
        price: 20
      },
      {
        id: 'x7x7x7x7-7777-77xx-x777-x777777xxx77',
        title: 'Switch to comfort',
        price: 50
      },
    ]
  },
  {
    type: 'check-in',
    offers: [
      {
        id: 'x7x7x7x7-7777-77xx-x777-x777777xxx77',
        title: 'Switch to comfort',
        price: 50
      },
      {
        id: 'j2j2j2j2-2222-22jj-j222-j222222jjj22',
        title: 'Add breakfast',
        price: 35
      },
    ]
  },
  {
    type: 'sightseeing',
    offers: [
      {
        id: 'm8m8m8m8-8888-88mm-m888-m888888mmm88',
        title: 'Lunch in city',
        price: 75
      },
      {
        id: 'v9v9v9v9-9999-99vv-v999-v999999vvv99',
        title: 'Book tickets',
        price: 85
      },
    ]
  },
  {
    type: 'restaurant',
    offers: []
  },
];

export { eventIcons, availableDestinations, availableOffers };
