import React from 'react';
import './App.css';
import './components/Layout/Layout';
import Layout from './components/Layout/Layout';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import {createMuiTheme} from '@material-ui/core';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer, {initialState} from './store/reducers/reducer';

const store = createStore(reducer, initialState);

const App = () =>  (
  <Provider store={store}>
    <MuiThemeProvider theme={THEME}>
      <div className="App">
        <Layout/>
      </div>
    </MuiThemeProvider>
  </Provider>
);

const THEME = createMuiTheme({
  typography: {
    'fontFamily': '"Open Sans", sans-serif',
    'fontSize': 14,
    'fontWeightLight': 300,
    'fontWeightRegular': 400,
    'fontWeightMedium': 500
  }
});

export default App;
