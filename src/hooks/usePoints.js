import { useState } from 'react';
import { mockPoints } from '../mock/mockPoints';

export function usePoints() {
  const [points, setPoints] = useState(mockPoints);
  return { points, setPoints }
}
