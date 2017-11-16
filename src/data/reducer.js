import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'

import parts from './parts/reducer';


const reducer = combineReducers({
  parts,
  router: routerReducer,
  form: formReducer,
});

export default reducer;
