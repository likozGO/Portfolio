import { useEffect, useState } from 'react';

const useIntersectionObserver = (reference, options) => {
  const [intersectionObserverEntry, setIntersectionObserverEntry] = useState(null);

  useEffect(() => {
    if (reference.current && typeof IntersectionObserver === 'function') {
      const handler = (entries) => {
        setIntersectionObserverEntry(entries[0]);
      };

      const observer = new IntersectionObserver(handler, options);
      observer.observe(reference.current);

      return () => {
        setIntersectionObserverEntry(null);
        observer.disconnect();
      };
    }
    return () => {};
  }, [reference.current, options.threshold, options.root, options.rootMargin]);

  return intersectionObserverEntry;
};

export default useIntersectionObserver;
