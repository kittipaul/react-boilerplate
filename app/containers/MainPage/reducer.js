/*
 *
 * MainPage reducer
 *
 */

import { fromJS } from 'immutable';

import { TYPE_GOAL, SAVE_GOAL, LOADED_GOALS, CLEAR_INPUT } from './constants';

export const initialState = fromJS({
  goal: '',
  goals: [],
});

function mainPageReducer(state = initialState, action) {
  switch (action.type) {
    case TYPE_GOAL:
      return state.set('goal', action.goal);
    case SAVE_GOAL:
      return state.set('goal', action.goal);
    case LOADED_GOALS:
      return state.set('goals', action.list);
    case CLEAR_INPUT:
      return state.set('goal', '');
    default:
      return state;
  }
}

export default mainPageReducer;
