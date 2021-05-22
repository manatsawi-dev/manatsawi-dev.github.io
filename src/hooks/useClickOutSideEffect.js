import {useEffect} from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
export const useClickOutsideEffect = (ref, callbackEvent) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (callbackEvent) {
          callbackEvent();
        }
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callbackEvent]);
};
