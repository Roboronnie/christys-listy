import { takeEvery, call, put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

function* studentSaga() {
    yield takeEvery('POST_STUDENTS', postStudentList);
    yield takeEvery('FETCH_STUDENTS', fetchStudentList);
}

function* postStudentList(action) {
    console.log('inside postStudentList');
    try {
        yield call(axios.post, '/api/student', action.payload);
    } catch (error) {
        console.log('error student saga: ', error);
    };
}

function* fetchStudentList() {
    try {
        const studentList = yield call(axios.get, '/api/student');
        yield dispatch({
            type: 'SET_STUDENTS',
            payload: studentList.data
        })
    } catch (error) {
        console.log(error)
    };
}
export default studentSaga;