import React from 'react';
import { CSSTransition } from 'react-transition-group';

// Hook
import useToggleAndOutClick from 'use-toggle-and-outclick';

const ExampleControl = () => {
  const [isDropOpened, dropRef, toggleDrop, closeExplicitly] = useToggleAndOutClick();

  return (
    <div className="example-control">
      <button
        type="button"
        onClick={toggleDrop}
      >
        Toggle drop down
      </button>

      <CSSTransition
        in={isDropOpened}
        timeout={200}
        classNames="example-control__drop"
        unmountOnExit
      >
        <div className="example-control__drop" ref={dropRef}>
          Some content of drop
          <button
            type="button"
            onClick={() => {
              // do something
              // and close drop
              closeExplicitly();
            }}
          >
            Option inside drop
          </button>
        </div>
      </CSSTransition>
    </div>
  );
};

export default ExampleControl;
