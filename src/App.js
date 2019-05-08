import React from 'react';
import './App.css';
import './components/Layout/Layout';
import Layout from './components/Layout/Layout';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import {createMuiTheme} from "@material-ui/core";

const App = () =>  (
    <MuiThemeProvider theme={THEME}>
        <div className="App">
            <Layout/>
        </div>
    </MuiThemeProvider>
);

const THEME = createMuiTheme({
    typography: {
        "fontFamily": "\"Open Sans\", sans-serif",
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500
    }
});

export default App;
