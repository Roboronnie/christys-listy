import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar.js';
import {connect} from 'react-redux';

mapStateToProps = () => {
    return (
        state
    )
}

class Schedule extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">Schedule</h1>
                    <NavBar />
                </header>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Schedule);