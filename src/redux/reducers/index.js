import { combineReducers } from 'redux';
import student from './studentReducer';
import companyAndRepresentative from './companyAndRepresentativeReducer';

const store = combineReducers({
    student,
    companyAndRepresentative
});

export default store;