'use client';

import { useEffect, useRef } from 'react';

// Sets up an interval with a set delay and cleans up after
export default function useInterval<CallbackFunction extends CallableFunction>(
  callback: CallbackFunction,
  delay: number | null
): void {
  const savedCallback = useRef<CallbackFunction>();

  // Saves the callback, so it can persist across rerenders of the component
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      // Checks if the callback is stored and calls it if it exists
      if (savedCallback.current) savedCallback.current();
    }
    // If the delay is valid, it calls the tick function with the specified delay.
    if (delay !== null) {
      // Saves the interval with a unique id
      const id = setInterval(tick, delay);
      // Clears the interval id when delay value changes or component unmounts
      return () => clearInterval(id);
    }
  }, [delay]);
}
