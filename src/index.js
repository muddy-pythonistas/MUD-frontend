import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider, createGlobalStyle } from 'styled-components';
import * as reset from './styles/reset.css';
import * as global from './styles/global.css';
import './index.css';

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
  tileSize: 4
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
