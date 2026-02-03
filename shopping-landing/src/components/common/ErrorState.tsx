import { Box, Typography, Button } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import RefreshIcon from '@mui/icons-material/Refresh';

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
  compact?: boolean;
}

export function ErrorState({
  message = 'Something went wrong. Please try again.',
  onRetry,
  compact = false,
}: ErrorStateProps) {
  if (compact) {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          py: 2,
          px: 3,
          bgcolor: 'error.light',
          borderRadius: 1,
          color: 'error.contrastText',
        }}
      >
        <ErrorOutlineIcon fontSize="small" />
        <Typography variant="body2" sx={{ flex: 1 }}>
          {message}
        </Typography>
        {onRetry && (
          <Button
            size="small"
            variant="outlined"
            onClick={onRetry}
            sx={{ color: 'inherit', borderColor: 'inherit' }}
          >
            Retry
          </Button>
        )}
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: 8,
        px: 3,
        textAlign: 'center',
      }}
    >
      <ErrorOutlineIcon
        sx={{
          fontSize: 64,
          color: 'error.main',
          mb: 2,
        }}
      />
      <Typography variant="h6" gutterBottom color="text.primary">
        Oops! Something went wrong
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3, maxWidth: 400 }}>
        {message}
      </Typography>
      {onRetry && (
        <Button
          variant="contained"
          color="primary"
          startIcon={<RefreshIcon />}
          onClick={onRetry}
        >
          Try Again
        </Button>
      )}
    </Box>
  );
}
