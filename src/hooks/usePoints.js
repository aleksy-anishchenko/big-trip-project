import { useState } from 'react';
import { mockPoints } from '../mock/mockPoints';

export function usePoints() {
  const [points] = useState(mockPoints);
  return { points }
}
