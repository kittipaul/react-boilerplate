/**
 *
 * GoalList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectGoals } from 'containers/MainPage/selectors';

import List from 'components/List/Loadable';
import ListTitle from './ListTitle';

/* eslint-disable react/prefer-stateless-function */
export class GoalList extends React.PureComponent {
  render() {
    const { goals } = this.props;
    const listProps = { goals };
    return (
      <div>
        <Helmet>
          <title>GoalList</title>
          <meta name="description" content="Description of GoalList" />
        </Helmet>
        <ListTitle>GOAL LIST</ListTitle>
        <List {...listProps} />
      </div>
    );
  }
}

GoalList.propTypes = {
  goals: PropTypes.array.isRequired,
};

const withConnect = connect(
  createStructuredSelector({
    goals: makeSelectGoals(),
  }),
);

export default compose(withConnect)(GoalList);
