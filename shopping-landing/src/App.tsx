import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './theme';
import { LandingPage } from './pages/LandingPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        {/* Skip to main content link for accessibility */}
        <Box
          component="a"
          href="#main-content"
          sx={{
            position: 'absolute',
            left: '-9999px',
            zIndex: 9999,
            padding: 2,
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            textDecoration: 'none',
            '&:focus': {
              left: 0,
              top: 0,
            },
          }}
        >
          Skip to main content
        </Box>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Placeholder routes for navigation links */}
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
