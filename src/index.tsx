import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Reset } from './styles/reset';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <>
    <Reset />
    <App />
  </>,
  document.getElementById('root')
);

serviceWorker.unregister();