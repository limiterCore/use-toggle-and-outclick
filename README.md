# `use-toggle-and-outclick`

> React hook for controlling the state of any dropdowns that need an outclick for closing

## Install

```sh
yarn add use-toggle-and-outclick
```

## Usage

```js
import useToggleAndOutClick from 'use-toggle-and-out-click';

const ExampleControl = () => {
  const [isDropOpened, dropRef, toggleDrop, closeExplicitly] = useToggleAndOutClick();
  /**
  * isDropOpened - state field weather the dropdown is open now
  * dropRef - ref for dropdown dom-node (ref={dropRef})
  * toggleDrop - function that toggles state
  * closeExplicitly - function that closes dropdown
  */

  // ...
};
```

## Examples

- [Simle example](https://github.com/limiterCore/use-toggle-and-out-click/examples/simple.jsx)
- [CSS transition](https://github.com/limiterCore/use-toggle-and-out-click/examples/transition.jsx)