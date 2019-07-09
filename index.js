import { useRef, useState } from 'react';

/**
 * The hook for controlling drop-downs with built-in *out-click* support,
 *
 * @return {Array}
 *   isDropOpened - state field weather the dropdown is open now
 *   dropRef - ref for dropdown dom-node (ref={dropRef})
 *   toggleDrop - function that toggles state
 *   closeExplicitly - function that closes dropdown
 */
const useToggleAndOutClick = () => {
  const [isDropOpened, setIsDropOpened] = useState(false);

  /** Here we keep the handler for out-click */
  const outsideClickHandler = useRef(event => {
    if (dropRef.current && !dropRef.current.contains(event.target)) {
      setIsDropOpened(false);
      window.removeEventListener('click', outsideClickHandler.current);
    }
  });

  const dropRef = useRef(null);

  const toggleDrop = () => {
    setIsDropOpened(prevState => {
      const newState = !prevState;

      if (newState) {
        setTimeout(() => {
          window.addEventListener('click', outsideClickHandler.current);
        }, 0);
      } else {
        window.removeEventListener('click', outsideClickHandler.current);
      }
      return newState;
    });
  };

  const closeExplicitly = () => {
    setIsDropOpened(false);
    window.removeEventListener('click', outsideClickHandler.current);
  };

  return [isDropOpened, dropRef, toggleDrop, closeExplicitly];
};

export default useToggleAndOutClick;
