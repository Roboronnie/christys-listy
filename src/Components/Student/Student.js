import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar.js';
import StudentInputs from '../StudentInputs/StudentInputs';
import { connect } from 'react-redux';

const mapStateToProp = (state) => ({
    students: state.student
})

class Student extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_STUDENTS' });
    }

    removeStudent = (id) => {
        console.log(id);
        // dispatch action to remove student from student table in db
    }

    render() {
        const studentList = this.props.students.map(item => {
            return (
                <div key={item.id}>
                    <div>
                        {item.student}
                        <button onClick={()=>{this.removeStudent(item.id)}}>remove</button>
                    </div>
                    <br />
                </div>
            )
        });
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