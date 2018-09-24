/**
 *
 * ListItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

function ListItem(props) {
  return <Item>{props.goal}</Item>;
}

ListItem.propTypes = {
  goal: PropTypes.string,
};

export default ListItem;
