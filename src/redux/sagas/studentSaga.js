import { takeEvery, call, put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

function* studentSaga() {
    yield takeEvery('POST_STUDENTS', postStudentList);
}

function* postStudentList(action) {
    console.log('inside postStudentList');
    try{
        yield call(axios.post, '/api/student', action.payload);
    } catch(error) {
        console.log('error student saga: ', error);
    };
}

export default studentSaga;