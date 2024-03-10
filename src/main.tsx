import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { store } from 'src/store/store';
import { Provider } from 'react-redux';
import { App } from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
