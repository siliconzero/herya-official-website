import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './_app.tsx';
import './styles/globals.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './lib/providers/theme-context.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </StrictMode>
);
