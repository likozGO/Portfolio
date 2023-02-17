import React from 'react';

function useTimeout(callback, delay) {
  const timeoutReference = React.useRef(null);
  const savedCallback = React.useRef(callback);
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  React.useEffect(() => {
    const tick = () => savedCallback.current();
    if (typeof delay === 'number') {
      timeoutReference.current = window.setTimeout(tick, delay);
      return () => window.clearTimeout(timeoutReference.current);
    }
    return null;
  }, [delay]);
  return timeoutReference;
}

export default useTimeout;
