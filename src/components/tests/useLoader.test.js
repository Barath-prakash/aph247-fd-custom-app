import { renderHook, act } from '@testing-library/react-hooks';
import useLoader from '../useLoader';

test('should increment counter', () => {
  const { result } = renderHook(() => useLoader());

  act(() => {
    result.current.setLoading(false);
  });

  expect(result.current.loading).toBe(false);
});

test('should increment counter', () => {
  const { result } = renderHook(() => useLoader());

  act(() => {
    result.current.setLoading(true);
  });

  expect(result.current.loading).toBe(true);
});
