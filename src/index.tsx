import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';
import './assets/scss/style.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
