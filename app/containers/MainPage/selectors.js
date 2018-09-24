import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the mainPage state domain
 */

const selectMainPageDomain = state => state.get('mainPage', initialState);

/**
 * Other specific selectors
 */

const makeSelectGoal = () =>
  createSelector(selectMainPageDomain, substate => substate.get('goal'));

const makeSelectGoals = () =>
  createSelector(selectMainPageDomain, substate => substate.get('goals'));

/**
 * Default selector used by MainPage
 */

const makeSelectMainPage = () =>
  createSelector(selectMainPageDomain, substate => substate.toJS());

export {
  selectMainPageDomain,
  makeSelectGoal,
  makeSelectGoals,
  makeSelectMainPage,
};
