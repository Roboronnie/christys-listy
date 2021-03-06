import React, { Component } from 'react';

class Home extends Component {
    activateChristyLogin = () => {
        console.log('christy clicked');
        this.props.history.push('company');
    }

    activateEmployerLogin = () => {
        console.log('employer clicked');
        this.props.history.push('company-ranking');
    }

    activateStudentLogin = () => {
        console.log('student clicked');
        this.props.history.push('student-ranking');
    }

    render() {
        return (
            <div>
                <p>Home Page</p>
                <button onClick={this.activateChristyLogin}>I'm a Christy</button>
                <button onClick={this.activateEmployerLogin}>I'm an employer</button>
                <button onClick={this.activateStudentLogin}>I'm a student</button>
            </div>
        )
    }
}

export default Home;