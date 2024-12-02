import { useState } from 'react';
import { mockOffers } from '../mock/mockOffers';

export function useOffers() {
  const [offers] = useState(mockOffers);

  const getFilteredOffers = (type, pointOffers) => {
    return offers.find(offer => offer.type === type).offers.filter(offer => pointOffers.includes(offer.id)) || [];
  }

  const getMatchingOffers = (type) => {
    return offers.filter((offer) => offer.type === type)[0].offers;
  }

  return { offers, getFilteredOffers, getMatchingOffers }
}
