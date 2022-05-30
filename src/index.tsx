import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter } from 'react-router-dom';
import { Theme, ThemeOptions, createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';
import "./style/reset.scss";
import "./style/vars.scss";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

declare module '@mui/material/styles' {
    interface CustomTheme extends Theme {
        primary: {
            main: string
        },
        paper: {
            background: string
        }
    }
    interface CustomThemeOptions extends ThemeOptions {
        primary?: {
            main?: string
        },
        paper?: {
            background?: string
        }
    }

    export function createTheme(options: CustomThemeOptions): CustomTheme;
}

export const theme = createTheme({
    palette: {
        primary: {
            main: "#032541"
        }
    },
    paper: {
        background: "#900"
    }
})


root.render(
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </ThemeProvider>

);