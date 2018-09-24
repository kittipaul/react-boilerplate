import { fromJS } from 'immutable';
import mainPageReducer from '../reducer';

import { typingGoal, saveGoal, loadGoals, clearInputBox } from '../actions';

describe('mainPageReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      goal: '',
      goals: [],
    });
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(mainPageReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the typingGoal action correctly', () => {
    const typed = 'typing goal';
    const expectedResult = state.set('goal', typed);

    expect(mainPageReducer(state, typingGoal(typed))).toEqual(expectedResult);
  });

  it('should handle the saveGoal action correctly', () => {
    const goalToSave = 'saving goal';
    const expectedResult = state.set('goal', goalToSave);

    expect(mainPageReducer(state, saveGoal(goalToSave))).toEqual(
      expectedResult,
    );
  });

  it('should handle the loadGoals action correctly', () => {
    const list = ['goal1', 'goal2'];
    const expectedResult = state.set('goals', list);

    expect(mainPageReducer(state, loadGoals(list))).toEqual(expectedResult);
  });

  it('should handle the clearInputBox action correctly', () => {
    const cleared = '';
    const expectedResult = state.set('goal', cleared);

    expect(mainPageReducer(state, clearInputBox(cleared))).toEqual(
      expectedResult,
    );
  });
});
