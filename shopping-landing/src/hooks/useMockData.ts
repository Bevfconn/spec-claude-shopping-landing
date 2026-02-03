import { useState, useEffect } from 'react';

export type LoadingState = 'loading' | 'success' | 'error';

export interface DataState<T> {
  data: T | null;
  state: LoadingState;
  error: string | null;
}

/**
 * Hook to load mock data with loading and error states
 * Simulates async data fetching for realistic UI behavior
 */
export function useMockData<T>(
  importFn: () => Promise<{ default: T }>,
  delay: number = 300
): DataState<T> & { refetch: () => void } {
  const [state, setState] = useState<DataState<T>>({
    data: null,
    state: 'loading',
    error: null,
  });

  const fetchData = async () => {
    setState({ data: null, state: 'loading', error: null });

    try {
      // Simulate network delay for realistic loading states
      await new Promise((resolve) => setTimeout(resolve, delay));

      const module = await importFn();
      setState({
        data: module.default,
        state: 'success',
        error: null,
      });
    } catch (err) {
      setState({
        data: null,
        state: 'error',
        error: err instanceof Error ? err.message : 'Failed to load data',
      });
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    ...state,
    refetch: fetchData,
  };
}

/**
 * Synchronous version for static imports
 */
export function useStaticData<T>(data: T): DataState<T> {
  return {
    data,
    state: 'success',
    error: null,
  };
}
