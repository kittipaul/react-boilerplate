import { fromJS } from 'immutable';
import {
  selectMainPageDomain,
  makeSelectGoal,
  makeSelectGoals,
} from '../selectors';

describe('selectMainPageDomain', () => {
  it('should select the MainPage state', () => {
    const mainPageState = fromJS({
      goal: '',
      goals: [],
    });
    const mockedState = fromJS({
      mainPage: mainPageState,
    });
    expect(selectMainPageDomain(mockedState)).toEqual(mainPageState);
  });
});

describe('makeSelectGoal', () => {
  const goalSelector = makeSelectGoal();
  it('should select the goal', () => {
    const goal = 'goalGoal';
    const mockedState = fromJS({
      mainPage: {
        goal,
      },
    });
    expect(goalSelector(mockedState)).toEqual(goal);
  });
});

describe('makeSelectGoals', () => {
  const goalsSelector = makeSelectGoals();
  it('should select the goal', () => {
    const goals = ['goal1', 'goal2'];
    const mockedState = fromJS({
      mainPage: {
        goals,
      },
    });
    expect(goalsSelector(mockedState)).toEqual(goals);
  });
});
