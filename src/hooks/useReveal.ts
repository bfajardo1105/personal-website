import { useEffect, useRef } from 'react';

/**
 * Adds the `.in-view` class to an element (and optionally its children
 * matching `childSelector`) when it scrolls into the viewport.
 * Pair with the `.reveal` utility class in index.css.
 */
export function useReveal<T extends HTMLElement>(childSelector?: string) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets = childSelector
      ? Array.from(root.querySelectorAll<HTMLElement>(childSelector))
      : [root];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [childSelector]);

  return ref;
}
