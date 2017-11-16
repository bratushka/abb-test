import { ACTIONS } from './constants';


class Actions {
  static update(data) {
    return {
      type: ACTIONS.UPDATE,
      ...data,
    };
  }
}

export default Actions;
