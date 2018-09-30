import React, { Component } from 'react';
import RepresentativeInputs from '../RepresentativeInputs/RepresentativeInputs';
import NavBar from '../NavBar/NavBar.js';

class Company extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">Company</h1>
                    <NavBar />
                </header>
                <div>Enter Company Name and Representative(s)</div>
                <div>Company Name </div>
                <input type="text" placeholder="Company Name" />
                <br />
                <RepresentativeInputs />
            </div>
        )
    }
}

export default Company;