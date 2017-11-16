import { MODULE_NAME } from './constants';


class Selectors {
  /**
   * Get the parts names.
   *
   * @param {Object} state
   * @return {Immutable.Seq.Indexed<string>}
   */
  static getParts(state) {
    return state[MODULE_NAME].keySeq();
  }

  /**
   * Get the features names by part name.
   *
   * @param {Object} state
   * @param {string} part
   * @return {Immutable.Seq.Indexed<string>}
   */
  static getFeatures(state, part) {
    return state[MODULE_NAME].get(part).keySeq();
  }

  /**
   * Get status of the feature.
   *
   * @param {Object} state
   * @param {string} part
   * @param {string} feature
   * @return {string}
   */
  static getFeatureStatus(state, part, feature) {
    return state[MODULE_NAME].getIn([part, feature, 'status']);
  }

  /**
   * Get data of the feature.
   *
   * @param {Object} state
   * @param {string} part
   * @param {string} feature
   * @return {Immutable.Seq.Indexed<Immutable.Seq.Indexed<Immutable.Seq.Indexed<number>>>}
   */
  static getFeatureData(state, part, feature) {
    return state[MODULE_NAME].getIn([part, feature, 'data']);
  }
}

export default Selectors;
