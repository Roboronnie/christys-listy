import React, { Component } from 'react';

class StudentInputs extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            students: [{ name: '' }],
        };
    }

    handleStudentNameChange = (index) => (event) => {
        const newStudentss = this.state.students.map((student, sindex) => {
            if (index !== sindex) return student;
            return { ...student, name: event.target.value };
        });
        this.setState({ students: newStudentss });
    }

    handleAddStudent = () => {
        this.setState({
            students: this.state.students.concat([{ name: '' }])
        });
    }

    handleRemoveStudent = (index) => () => {
        this.setState({
            students: this.state.students.filter((s, sindex) => index !== sindex)
        });
    }

    render() {
        console.log(this.state.students)
        return (
            <form>
                <div>Students</div>
                {this.state.students.map((student, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            placeholder={`Student #${index + 1} name`}
                            value={student.name}
                            onChange={this.handleStudentNameChange(index)}
                        />
                        <button type="button" onClick={this.handleRemoveStudent(index)}>remove</button>
                    </div>
                ))}
                <button type="button" onClick={this.handleAddStudent}>Add Students</button>
            </form>
        )
    }
}

export default StudentInputs;