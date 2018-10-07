import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar.js';
import StudentInputs from '../StudentInputs/StudentInputs';
import { connect } from 'react-redux';

const mapStateToProp = (state) => ({
    students: state.student.students
})

class Student extends Component {

    componentDidMount () {
        this.props.dispatch({ type: 'FETCH_STUDENTS'});
    }

    render() {
        let studentList = '';
        studentList = this.props.students.map(item => {
            return(
                <div key={item.id}>
                {item.student}
                </div>
            )
        });
        console.log(this.props.students.length);
        console.log(studentList);
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">Student</h1>
                    <NavBar />
                </header>
                <StudentInputs />
                {studentList}
            </div>
        )
    }
}

export default connect(mapStateToProp)(Student);