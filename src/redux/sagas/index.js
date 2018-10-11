import { all } from 'redux-saga/effects';
import studentSaga from './studentSaga';
import companyAndRepresentativeSaga from './companyAndRepresentativeSaga'

export default function* rootSaga() {
    yield all([
      studentSaga(),
      companyAndRepresentativeSaga(),
    ]);
  }