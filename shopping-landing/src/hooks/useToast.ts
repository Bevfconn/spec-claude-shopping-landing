import { useState, useCallback } from 'react';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface ToastState {
  open: boolean;
  message: string;
  type: ToastType;
}

const initialState: ToastState = {
  open: false,
  message: '',
  type: 'info',
};

/**
 * Hook to manage toast notification state
 */
export function useToast() {
  const [toast, setToast] = useState<ToastState>(initialState);

  const showToast = useCallback((message: string, type: ToastType = 'info') => {
    setToast({ open: true, message, type });
  }, []);

  const showSuccess = useCallback((message: string) => {
    showToast(message, 'success');
  }, [showToast]);

  const showError = useCallback((message: string) => {
    showToast(message, 'error');
  }, [showToast]);

  const showInfo = useCallback((message: string) => {
    showToast(message, 'info');
  }, [showToast]);

  const showWarning = useCallback((message: string) => {
    showToast(message, 'warning');
  }, [showToast]);

  const hideToast = useCallback(() => {
    setToast((prev) => ({ ...prev, open: false }));
  }, []);

  return {
    toast,
    showToast,
    showSuccess,
    showError,
    showInfo,
    showWarning,
    hideToast,
  };
}
