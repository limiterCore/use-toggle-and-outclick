import { renderHook, act } from '@testing-library/react-hooks';
import useToggleAndOutClick from '.';

test('should toggle state', () => {
  const { result } = renderHook(() => useToggleAndOutClick());

  act(() => {
    result.current[2]();
  });

  expect(result.current[0]).toBe(true);

  act(() => {
    result.current[2]();
  });

  expect(result.current[0]).toBe(false);
});

test('should hide drop', () => {
  const { result } = renderHook(() => useToggleAndOutClick());
  act(() => {
    result.current[2]();
  });

  act(() => {
    result.current[3]();
  });

  expect(result.current[0]).toBe(false);
});