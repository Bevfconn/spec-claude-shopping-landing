import { Snackbar, Alert, type AlertColor } from '@mui/material';

interface ToastProps {
  open: boolean;
  message: string;
  type?: AlertColor;
  onClose: () => void;
  duration?: number;
}

export function Toast({
  open,
  message,
  type = 'info',
  onClose,
  duration = 5000,
}: ToastProps) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert
        onClose={onClose}
        severity={type}
        variant="filled"
        sx={{ width: '100%', minWidth: 300 }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
