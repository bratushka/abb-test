import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import partsActions from '../data/parts/actions';
import partsSelectors from '../data/parts/selectors';
import { message } from '../server/message';

import { Part } from './Part';


function mapStateToProps(state) {
  return {
    parts: partsSelectors.getParts(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    update: () => dispatch(partsActions.update(message())),
  };
}

class DashBoardComponent extends Component {
  static propTypes = {
    parts: PropTypes.object,
  };

  componentDidMount() {
    setInterval(this.props.update, 200);
  }

  render() {
    return (
      <div>
        {this.props.parts.toJS().map(part => (
          <Part key={part} part={part} />
        ))}
      </div>
    );
  }
}

export const DashBoard = connect(mapStateToProps, mapDispatchToProps)(
  DashBoardComponent
);
