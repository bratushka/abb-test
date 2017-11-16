import Immutable from 'immutable';

import { ACTIONS } from './constants';


function reducer(state = Immutable.OrderedMap(), action) {
  switch (action.type) {
    case ACTIONS.UPDATE:
      return state.withMutations(mutable => {
        mutable.setIn([action.part, action.feature, 'status'], action.status);

        // Push the new data to the beginning of the array and shrink it to 3 items max.
        const newData = mutable
          .getIn([action.part, action.feature, 'data'], Immutable.List())
          .unshift(Immutable.fromJS(action.data))
          .slice(0, 3)
        ;
        mutable.setIn([action.part, action.feature, 'data'], newData);

        return mutable;
      });

    default:
      return state;
  }
}

export default reducer;
