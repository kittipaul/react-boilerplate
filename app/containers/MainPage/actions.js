/*
 *
 * MainPage actions
 *
 */

import {
  TYPE_GOAL,
  SAVE_GOAL,
  FETCH_GOALS,
  LOADED_GOALS,
  CLEAR_INPUT,
} from './constants';

export function typingGoal(goal) {
  return {
    type: TYPE_GOAL,
    goal,
  };
}

export function saveGoal(goal) {
  return {
    type: SAVE_GOAL,
    goal,
  };
}

export function fetchGoals() {
  return {
    type: FETCH_GOALS,
  };
}

export function loadGoals(list) {
  return {
    type: LOADED_GOALS,
    list,
  };
}

export function clearInputBox() {
  return {
    type: CLEAR_INPUT,
  };
}
