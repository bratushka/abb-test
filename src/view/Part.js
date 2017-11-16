import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import partsSelectors from '../data/parts/selectors';

import { Feature } from './Feature';

import './Part.css';


function mapStateToProps(state, ownProps) {
  return {
    features: partsSelectors.getFeatures(state, ownProps.part),
  };
}

export function PartComponent({
  part,
  features,
}) {
  return (
    <section className="part">
      <div className="part__header">Part {part}</div>
      <div className="part__data">
        {features.toJS().map(feature => (
          <Feature key={feature} part={part} feature={feature} />
        ))}
      </div>
    </section>
  );
}
PartComponent.propTypes = {
  part: PropTypes.string.isRequired,
  features: PropTypes.object,
};
export const Part = connect(mapStateToProps)(
  PartComponent
);