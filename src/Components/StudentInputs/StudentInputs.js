import React, { Component } from 'react';
import { connect } from 'react-redux';

class StudentInputs extends Component {
    constructor() {
        super();
        this.state = {
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

    handleSubmitStudentList = () => {
        this.props.dispatch({ type: 'POST_STUDENTS', payload: this.state.students});
        this.setState({
            students: [{ name: '' }]
        })
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmitStudentList}>
                <div>Students</div>
                {this.state.students.map((student, index) => (
                    <div key={index}>
                        <input
                            required
                            type="text"
                            placeholder={`Student #${index + 1} name`}
                            value={student.name}
                            onChange={this.handleStudentNameChange(index)}
                        />
                        <button type="button" onClick={this.handleRemoveStudent(index)}>remove</button>
                    </div>
                ))}
                <button type="button" onClick={this.handleAddStudent}>Add Students</button>
                <br />
                <input type="submit" />
            </form>
            </div>   
        )
    }
}

export default connect()(StudentInputs);