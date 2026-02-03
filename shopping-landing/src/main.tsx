import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Remove default Vite CSS
// import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
