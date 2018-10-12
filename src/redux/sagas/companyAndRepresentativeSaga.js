import { takeEvery, call, put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

function* companyAndRepresentativeSaga() {
    // yield takeEvery('POST_COMPANY', postCompany);
    yield takeEvery('POST_COMPANY_AND_REPRESENTATIVES', postCompanyAndRepresentative);
}

// function* postCompany(action) {
//     try {
//         yield call(axios.post, 'api/companyAndRepresentatives', action.payload);
//     } catch (error) {
//         console.log('error company saga: ', error);
//     }
// }


function* postCompanyAndRepresentative(action) {
    console.log('inside postCompanyAndRepresentative');
    try {
        yield call(axios.post, 'api/companyAndRepresentatives/company', {company: action.payload.company});
    } catch (error) {
        console.log('error company saga: ', error);
    }
    try {
        yield call(axios.post, `/api/companyAndRepresentatives/${action.payload.company}`, {representatives: action.payload.representatives});
    } catch (error) {
        console.log('error representative saga: ', error);
    };
}

export default companyAndRepresentativeSaga;