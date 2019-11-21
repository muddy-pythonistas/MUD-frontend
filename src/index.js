import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider, createGlobalStyle } from 'styled-components';
import * as reset from './styles/reset.css';
import * as global from './styles/global.css';
import './index.css';
import './fonts/PxPlus_IBM_VGA8.ttf';
import './fonts/alagard.ttf';

import { StateProvider } from './contexts/StateProvider';
import { initialState } from './reducers/initialState';
import { rootReducer } from './reducers/rootReducer';
import App from './App';

const GlobalStyle = createGlobalStyle`
    ${reset} 
    ${global}
`;

const theme = {
  spriteSize: 16,
  tileSize: 4,
  borderRadius: '4px',
  titleFont: 'Orbitron, sans-serif',
  bodyFont: 'Economica, sans-serif;',
  infoTitle: 'Alagard, monospace, serif',
  infoBody: 'IBM VGA8, monospace, serif',
  infoColor: '#c4c4c4',
  grayAccent: '#c4c4c4',
  yellowAccent: '#e8ea90',
  white: '#fff',
  errorRed: '#A50203',
  primary0: '#DEE2E3',
  primary1: '#AFBDBE', //matches tile color
  primary2: '#7E9698',
  primary3: '#5B7F83',
  accent0: '#E3E4E7',
  accent1: '#BABEC9',
  accent2: '#8F96A9',
  accent3: '#697491',
  tinyFont: '1.2rem',
  smallFont: '1.5rem',
  mediumFont: '1.8rem',
  largeFont: '2.2rem',
  hugeFont: '3.0rem',
  headerSize: '6.0rem'
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router>
      <StateProvider initialState={initialState} reducer={rootReducer}>
        <App />
      </StateProvider>
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);
