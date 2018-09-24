import axios from 'axios';
import { select, fork, call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { makeSelectGoal } from './selectors';

import { SAVE_GOAL, FETCH_GOALS } from './constants';
import { loadGoals } from './actions';

const goalsURL = '/api/goals';
const fetchApi = () => axios.get(goalsURL);

export function* onFetchGoals() {
  try {
    const list = yield call(fetchApi);
    const payload = list ? list.data : {};
    yield put(loadGoals(payload));
  } catch (err) {
    throw new Error(err);
  }
}

export function* onSaveGoal() {
  try {
    const goalToSave = yield select(makeSelectGoal());
    axios
      .post('/api/goals', { goal: goalToSave })
      .then(res => res.json())
      .catch(err => err);
  } catch (err) {
    throw new Error(err);
  }
}

export default function* sagas() {
  yield [
    fork(takeLatest, FETCH_GOALS, onFetchGoals),
    fork(takeLatest, SAVE_GOAL, onSaveGoal),
  ];
}
