import React from 'react';

import { CookiesProvider } from 'react-cookie';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import App from './App';
import { UserProvider } from './Context/User.context';
import Toast from './components/Toast';
import './index.css';
import { themes } from './themes';

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={themes}>
        <CookiesProvider>
            <UserProvider>
                <App />
                <Toast />
            </UserProvider>
        </CookiesProvider>
    </ThemeProvider>
);
