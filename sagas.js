import { put, takeEvery, all, call } from "redux-saga/effects";

export const delay = (ms) => new Promise(res => setTimeout(res, ms));

export function* helloSaga() {
    console.log('Hello Sagas!')
}

export function* incrementAsync() {
    yield call(delay, 1000); //call zove funkciju
    yield put({ type: 'INCREMENT' }); //put dispatcha akciju
}

export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

export default function* rootSaga() {
    yield all([
      helloSaga(),
      watchIncrementAsync()
    ])
}