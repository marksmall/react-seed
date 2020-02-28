import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import installDevTools from './dev-tools/load';

const render = () => {
  const App = require('./app.component').default;

  ReactDOM.render(
    <StrictMode>
      <App />
    </StrictMode>,
    document.getElementById('root')
  );
};

installDevTools(() => {
  render();
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./app.component', render);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
