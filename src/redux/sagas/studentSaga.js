import { takeEvery, call, put as dispatch } from 'redux-saga';
import axios from 'axios';

function* studentSaga() {
    yield takeEvery('POST_STUDENT_LIST', postStudentList);
}

function* postStudentList(action) {
    try{
        console.log('inside try', action);
    } catch(error) {
        console.log(error)
    };
}

export default studentSaga;