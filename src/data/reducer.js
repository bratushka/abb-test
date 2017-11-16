import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import parts from './parts/reducer';


const reducer = combineReducers({
  parts,
  router: routerReducer,
});

export default reducer;
