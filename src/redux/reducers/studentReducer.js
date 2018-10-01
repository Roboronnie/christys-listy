import { combineReducers } from 'redux';

const students = (state = '', action) => {
    console.log('inside student reducer');
    console.log('state: :', state, 'and action is: ',action);
    return state;
}

export default combineReducers({
    students
})