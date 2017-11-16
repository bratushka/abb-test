import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';

import partsSelectors from '../data/parts/selectors';
import { getColorClass, getMark } from './utils';

import './Feature.css';


function mapStateToProps(state, ownProps) {
  return {
    status: partsSelectors.getFeatureStatus(state, ownProps.part, ownProps.feature),
    data: partsSelectors.getFeatureData(state, ownProps.part, ownProps.feature),
  };
}

export function FeatureComponent({
  feature,
  status,
  data,
}) {
  return (
    <article className="feature">
      <div className={classNames('feature__header', getColorClass(status))}>
        <span>🞅</span>
        <span>{feature}</span>
        <span>{getMark(status)}</span>
      </div>
      <div className="feature__body">
        <table>
          <thead>
            <tr>
              <th>Control</th>
              <th>Dev</th>
              <th>Dev out tol</th>
              <th />
            </tr>
          </thead>

          {data.toJS().map((metrix, i) => (
            <tbody key={i}>
              {['x', 'y', 'z', 'Diameter'].map((value, j) => (
                <tr key={j}>
                  <td>{value}</td>
                  <td>{metrix[j][0].toPrecision(4)}</td>
                  <td>{metrix[j][1].toPrecision(4)}</td>
                  <td className={getColorClass(metrix[j][2])}>{getMark(metrix[j][2])}</td>
                </tr>
              ))}
            </tbody>
          ))}
        </table>
      </div>
    </article>
  );
}
FeatureComponent.propTypes = {
  part: PropTypes.string.isRequired,
  feature: PropTypes.string.isRequired,
  status: PropTypes.number,
  data: PropTypes.object,
};
export const Feature = connect(mapStateToProps)(
  FeatureComponent
);