import { MODULE_NAME } from './constants';


class Selectors {
  static getParts(state) {
    return state[MODULE_NAME].keySeq();
  }

  static getFeatures(state, part) {
    return state[MODULE_NAME].get(part).keySeq();
  }

  static getFeatureStatus(state, part, feature) {
    return state[MODULE_NAME].getIn([part, feature, 'status']);
  }

  static getFeatureData(state, part, feature) {
    return state[MODULE_NAME].getIn([part, feature, 'data']);
  }
}

export default Selectors;
