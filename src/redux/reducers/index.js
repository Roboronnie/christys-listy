import { combineReducers } from 'redux';
import student from './studentReducer';

const store = combineReducers({
    student,
});

export default store;