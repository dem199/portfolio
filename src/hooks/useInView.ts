import { useRef, useState, useEffect, RefObject } from 'react';

/**
 * Returns [ref, inView].
 * inView becomes true once the element enters the viewport (one-shot trigger).
 */
export function useInView(
  threshold = 0.15
): [RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}