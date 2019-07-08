import React from 'react';

// Hooks
import useToggleAndOutClick from 'hooks/useToggleAndOutClick';

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

      {isDropOpened && (
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
      )}
    </div>
  );
};

export default ExampleControl;
