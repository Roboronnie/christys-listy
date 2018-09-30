import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar.js';
import StudentInputs from '../StudentInputs/StudentInputs';

class Student extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">Student</h1>
                    <NavBar />
                </header>
                <StudentInputs />
            </div>
        )
    }
}

export default Student;