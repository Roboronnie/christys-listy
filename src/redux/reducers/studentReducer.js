import { combineReducers } from 'redux';

const students = (state = '', action) => {
    switch (action.type) {
        case 'SET_STUDENTS':
            console.log(action.payload);
            return action.payload;
        default:
          return state;
      }
}

export default combineReducers({
    students
})