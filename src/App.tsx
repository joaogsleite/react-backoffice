import React from 'react';
import Root from 'views/Root';
import { BrowserRouter } from 'react-router-dom';

import 'style/index.scss';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  );
}

export default App;
