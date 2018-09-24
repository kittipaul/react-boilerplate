import {
  typingGoal,
  saveGoal,
  fetchGoals,
  loadGoals,
  clearInputBox,
} from '../actions';

import {
  TYPE_GOAL,
  SAVE_GOAL,
  FETCH_GOALS,
  LOADED_GOALS,
  CLEAR_INPUT,
} from '../constants';

describe('MainPage actions', () => {
  describe('typingGoal', () => {
    it('has a type of TYPE_GOAL and pass typing goal to payload', () => {
      const typed = 'typing';
      const expected = {
        type: TYPE_GOAL,
        goal: typed,
      };

      expect(typingGoal(typed)).toEqual(expected);
    });
  });

  describe('saveGoal', () => {
    it('has a type of SAVE_GOAL and pass the goal to save in database', () => {
      const goalToSave = 'saved';
      const expected = {
        type: SAVE_GOAL,
        goal: goalToSave,
      };

      expect(saveGoal(goalToSave)).toEqual(expected);
    });
  });

  describe('fetchGoals', () => {
    it('has a type of SAVE_GOAL and fetch goals from database', () => {
      const expected = {
        type: FETCH_GOALS,
      };

      expect(fetchGoals()).toEqual(expected);
    });
  });

  describe('loadGoals', () => {
    it('has a type of SAVE_GOAL and set the goals state to the data we fetch from database', () => {
      const goalList = ['one', 'two'];
      const expected = {
        type: LOADED_GOALS,
        list: goalList,
      };

      expect(loadGoals(goalList)).toEqual(expected);
    });
  });

  describe('clearInputBox', () => {
    it('has a type of CLEAR_INPUT and reset the goal state to empty string to clear the input box', () => {
      const expected = {
        type: CLEAR_INPUT,
      };

      expect(clearInputBox()).toEqual(expected);
    });
  });
});
