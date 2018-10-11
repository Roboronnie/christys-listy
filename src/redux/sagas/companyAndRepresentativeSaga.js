import { takeEvery, call, put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

function* companyAndRepresentativeSaga() {
    yield takeEvery('POST_COMPANY_AND_REPRESENTATIVES', postCompanyAndRepresentative);
}

function* postCompanyAndRepresentative(action) {
    console.log('inside postCompanyAndRepresentative');
    try {
        yield call(axios.post, '/api/companyAndRepresentatives', action.payload);
    } catch (error) {
        console.log('error company and representative saga: ', error);
    };
}

export default companyAndRepresentativeSaga;