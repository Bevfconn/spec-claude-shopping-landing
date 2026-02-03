import { Component, type ErrorInfo, type ReactNode } from 'react';
import { Box, Typography, Button } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  sectionName?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            py: 6,
            px: 2,
            textAlign: 'center',
            bgcolor: 'grey.50',
            borderRadius: 1,
          }}
        >
          <ErrorOutlineIcon
            sx={{ fontSize: 48, color: 'warning.main', mb: 2 }}
          />
          <Typography variant="h6" gutterBottom>
            {this.props.sectionName
              ? `Unable to load ${this.props.sectionName}`
              : 'Something went wrong'}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 2, maxWidth: 400 }}
          >
            We're having trouble loading this content. Please try again.
          </Typography>
          <Button
            variant="outlined"
            onClick={this.handleRetry}
            size="small"
          >
            Try Again
          </Button>
        </Box>
      );
    }

    return this.props.children;
  }
}
