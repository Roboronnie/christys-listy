import { takeEvery, call, put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

function* companyAndRepresentativeSaga() {
    yield takeEvery('POST_COMPANY_AND_REPRESENTATIVES', postCompanyAndRepresentative);
    yield takeEvery('GET_COMPANY_AND_REPRESENTATIVE', getCompanyAndRepresentative);
}

function* postCompanyAndRepresentative(action) {
    try {
        yield call(axios.post, '/api/companyAndRepresentatives/company', {company: action.payload.company});
        yield call(axios.post, `/api/companyAndRepresentatives/${action.payload.company}`, {representatives: action.payload.representatives});
    } catch (error) {
        console.log('error company saga: ', error);
    }
}

function* getCompanyAndRepresentative() {
    try {
        const comapanyAndRepresentative = yield call(axios.get, 'api/companyAndRepresentatives');
        yield dispatch({
            type: 'SET_COMPANY_AND_REPRESENTATIVES',
            payload: comapanyAndRepresentative.data
        })
    } catch (error) {
        console.log('error getting company and representative: ', error);
    }
}

export default companyAndRepresentativeSaga;