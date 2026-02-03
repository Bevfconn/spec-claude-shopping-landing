import { useState } from 'react';
import { Box, TextField, Button, Typography, Alert, CircularProgress } from '@mui/material';
import { validateEmail } from '@/utils/validateEmail';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Validate email
    if (!email.trim()) {
      setErrorMessage('Please enter your email address');
      setStatus('error');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      setStatus('error');
      return;
    }

    setStatus('loading');

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulate success (in real app, this would be an API call)
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <Alert
        severity="success"
        sx={{
          maxWidth: 400,
          mx: 'auto',
        }}
      >
        <Typography variant="body2">
          Thank you for subscribing! Check your email for confirmation.
        </Typography>
      </Alert>
    );
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 1.5,
        maxWidth: 450,
        mx: 'auto',
      }}
      noValidate
    >
      <TextField
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (status === 'error') {
            setStatus('idle');
            setErrorMessage('');
          }
        }}
        error={status === 'error'}
        helperText={errorMessage}
        disabled={status === 'loading'}
        size="small"
        fullWidth
        inputProps={{
          'aria-label': 'Email address for newsletter',
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            bgcolor: 'background.paper',
          },
        }}
      />
      <Button
        type="submit"
        variant="contained"
        disabled={status === 'loading'}
        sx={{
          minWidth: 120,
          height: 40,
          textTransform: 'none',
          fontWeight: 600,
          flexShrink: 0,
        }}
      >
        {status === 'loading' ? (
          <CircularProgress size={20} color="inherit" />
        ) : (
          'Subscribe'
        )}
      </Button>
    </Box>
  );
}
