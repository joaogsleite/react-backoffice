import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

import RootView from 'views/Root';
import { Provider } from './reducers';

import 'services/api/mock';
import 'style/index.scss';

const App: React.FC = () => (
  <Provider>
    <BrowserRouter>
      <RootView />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
