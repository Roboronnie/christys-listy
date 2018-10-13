import { combineReducers } from 'redux';

const defaultState = [{ id: '', student: ''}]
const students = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_STUDENTS':
            console.log(action.payload);
            return action.payload;
        default:
          return state;
      }
}

export default students;