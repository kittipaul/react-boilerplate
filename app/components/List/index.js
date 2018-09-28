/**
 *
 * List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import ListItem from 'components/ListItem/Loadable';

function List({ goals }) {
  if (goals) {
    const recentGoal = goals.slice().reverse();
    return recentGoal.map(goal => <ListItem key={goal.goal} {...goal} />);
  }
  return <div />;
}

List.propTypes = {
  goals: PropTypes.array,
};

export default List;
