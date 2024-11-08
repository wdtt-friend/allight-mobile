import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './assets/styles/common.scss';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme.ts';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
)
