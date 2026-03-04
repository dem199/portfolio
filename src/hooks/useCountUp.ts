import { useState, useEffect } from 'react';

/**
 * Animates a number from 0 to `target` whenever `inView` becomes true.
 */
export function useCountUp(
  target: number,
  inView: boolean,
  duration = 1500
): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let current = 0;
    const step = Math.ceil(target / (duration / 16));

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return count;
}