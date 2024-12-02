import { useState } from 'react';
import { mockDestinations } from '../mock/mockDestinations';

export function useDestinations() {

  const [destinations] = useState(mockDestinations);

  const getDestinationById = (id) => {
    return destinations.find((element) => id === element.id);
  }

  const isDestination = (id) => {
    return destinations.some((element) => id === element.id && element.description !== '');
  }

  const getDestinationName = (id) => {
    return destinations.filter((element) => id === element.id)[0].name;
  }

  return { destinations, getDestinationById, isDestination, getDestinationName };
}
