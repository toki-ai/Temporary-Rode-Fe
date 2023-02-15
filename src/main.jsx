import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { UserProvider } from './Context/User.context';
import { ThemeProvider } from 'styled-components';
import { themes } from './themes';
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={themes}>
            <UserProvider>
                <App />
            </UserProvider>
        </ThemeProvider>
    </React.StrictMode>
);
