import React, { Component } from 'react';
import RepresentativeInputs from '../RepresentativeInputs/RepresentativeInputs';
import NavBar from '../NavBar/NavBar.js';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    companyAndRepresentative: state.companyAndRepresentative,
})


class Company extends Component {
    
    componentDidMount () {
        this.props.dispatch({ type:'GET_COMPANY_AND_REPRESENTATIVE'});
    }

    render() {
        console.log(this.props.companyAndRepresentative);
        let display = '';
        this.props.companyAndRepresentative.map()

        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">Company</h1>
                    <NavBar />
                </header>
                <div>Enter Company Name and Representative(s)</div>
                <RepresentativeInputs />
            </div>
        )
    }
}

export default connect(mapStateToProps)(Company);