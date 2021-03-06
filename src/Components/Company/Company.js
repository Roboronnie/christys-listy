import React, { Component } from 'react';
import RepresentativeInputs from '../RepresentativeInputs/RepresentativeInputs';
import NavBar from '../NavBar/NavBar.js';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    companyAndRepresentative: state.companyAndRepresentative,
})


class Company extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'GET_COMPANY_AND_REPRESENTATIVE' });
    }

    removeRepresentative = (id) => {
        console.log(id);
        // dispatch action to remove rep from db rep table here
    }
    render() {
        console.log(this.props.companyAndRepresentative);
        const companyNames = [];
        this.props.companyAndRepresentative.map(item => {
            companyNames.push(item.company_name);
            return null
        })
        console.log('company names: ', companyNames);
        const uniqueCompanyName = [...new Set(companyNames)];
        console.log('unique company names: ', uniqueCompanyName);
        let display = this.props.companyAndRepresentative.map(item => {
            // if (uniqueCompanyName.includes(item.company_name)) {

            // }
            return (
                <div key={item.representative_id}>
                    <div>
                        {item.company_name} : {item.representative_name}
                        <button onClick={()=>{this.removeRepresentative(item.representative_id)}}>remove</button>
                    </div>
                    <br />
                </div>
            )
        })
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">Company</h1>
                    <NavBar />
                </header>
                <div>Enter Company Name and Representative(s)</div>
                <RepresentativeInputs />
                <br />
                {display}
            </div>
        )
    }
}

export default connect(mapStateToProps)(Company);