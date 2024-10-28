import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

dayjs.extend(isBetween);

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function humanizePointDate(date, format) {
  return date ? dayjs(date).format(format) : '';
}

function humanizePointDuration(dateFrom, dateTo) {
  if (dateFrom && dateTo) {
    const duration = dayjs(dateTo).diff(dayjs(dateFrom), 'minute');
    if (duration < 60) {
      return `${duration}M`;
    } else if (duration < 1440) {
      const hours = Math.floor(duration / 60);
      const minutes = duration % 60;
      return `${hours.toString().padStart(2, '0')}H ${minutes.toString().padStart(2, '0')}M`;
    } else {
      const days = Math.floor(duration / 1440);
      const hours = Math.floor((duration % 1440) / 60);
      const minutes = duration % 60;
      return `${days.toString().padStart(2, '0')}D ${hours.toString().padStart(2, '0')}H ${minutes.toString().padStart(2, '0')}M`;
    }
  }
  return '';
}

function adaptPointToClientItem(point) {
  const adaptedPoint = {
    ...point,
    basePrice: point['base_price'],
    dateTo: point['date_to'],
    dateFrom: point['date_from'],
    isFavorite: point['is_favorite']
  };

  delete adaptedPoint['base_price'];
  delete adaptedPoint['date_to'];
  delete adaptedPoint['date_from'];
  delete adaptedPoint['is_favorite'];

  return adaptedPoint;
}

function adaptPointToClient(points) {
  return points.map((point) => adaptPointToClientItem(point));
}

export { getRandomNumber, getRandomArrayElement, humanizePointDate, humanizePointDuration, adaptPointToClient };
