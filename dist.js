"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * The hook for controlling drop-downs with built-in *out-click* support,
 *
 * @return {Array}
 *   isDropOpened - state field weather the dropdown is open now
 *   dropRef - ref for dropdown dom-node (ref={dropRef})
 *   toggleDrop - function that toggles state
 *   closeExplicitly - function that closes dropdown
 */
var useToggleAndOutClick = function useToggleAndOutClick() {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isDropOpened = _useState2[0],
      setIsDropOpened = _useState2[1];
  /** Here we keep the handler for out-click */


  var outsideClickHandler = (0, _react.useRef)(function (event) {
    if (dropRef.current && !dropRef.current.contains(event.target)) {
      setIsDropOpened(false);
      window.removeEventListener('click', outsideClickHandler.current);
    }
  });
  var dropRef = (0, _react.useRef)(null);

  var toggleDrop = function toggleDrop() {
    setIsDropOpened(function (prevState) {
      var newState = !prevState;

      if (newState) {
        setTimeout(function () {
          window.addEventListener('click', outsideClickHandler.current);
        }, 0);
      } else {
        window.removeEventListener('click', outsideClickHandler.current);
      }

      return newState;
    });
  };

  var closeExplicitly = function closeExplicitly() {
    setIsDropOpened(false);
    window.removeEventListener('click', outsideClickHandler.current);
  };

  return [isDropOpened, dropRef, toggleDrop, closeExplicitly];
};

var _default = useToggleAndOutClick;
exports["default"] = _default;
