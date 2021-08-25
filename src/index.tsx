import { render } from 'preact';
import App from './components/App';
import { Reset } from './styles/reset';
import { Global } from '@emotion/react';

render(
  <>
    <Global styles={[Reset]} />
    <App />
  </>,
  document.getElementById('root')!
);
