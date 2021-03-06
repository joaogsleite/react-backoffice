import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import { Root } from 'views/Root';
import { Provider } from './reducers';

import 'style/index.scss';

const App: React.FC = () => (
  <Provider>
    <BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL}>
      <Root />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();