import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import Store from './stores/mainStore';
import App from './components/app';

const store = new Store()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
