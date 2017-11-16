import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import 'reset-css';

import generateStore, { history } from './data/store';
import { Main } from './view/Main';


function App() {
  return (
    <Provider store={generateStore()}>
      <ConnectedRouter history={history}>
        <div className="app">
          <Main />
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
