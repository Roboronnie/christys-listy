import React, { Component } from 'react';
import { connect } from 'react-redux';

class RepresentativeInputs extends Component {
    constructor() {
        super();
        this.state = {
            company: '',
            representatives: [{ name: '' }],
        };
    }

    handleRepresentativeNameChange = (index) => (event) => {
        const newRepresentatives = this.state.representatives.map((representative, sindex) => {
            if (index !== sindex) return representative;
            return { ...representative, name: event.target.value };
        });
        this.setState({ representatives: newRepresentatives });
    }

    handleAddRepresentative = () => {
        this.setState({
            representatives: this.state.representatives.concat([{ name: '' }])
        });
    }

    handleRemoveRepresentative = (index) => () => {
        this.setState({
            representatives: this.state.representatives.filter((s, sindex) => index !== sindex)
        });
    }

    handleSubmitRepresentativesAndCompany = () => {
        this.props.dispatch({ type: 'POST_COMPANY_AND_REPRESENTATIVES', payload: this.state});
        this.setState({
            company: '',
            representatives: [{ name: '' }]
        })
    }

    handleCompanyNameChange = (event) => {
        this.setState({
            company: event.target.value
        })
    }

    render() {
        console.log(this.state)
        return (
            <form onSubmit={this.handleSubmitRepresentativesAndCompany}>
                <div>Company Name </div>
                <input value={this.state.company} type="text" placeholder="Company Name" onChange={this.handleCompanyNameChange}/>
                <br />
                <div>Representatives</div>
                {this.state.representatives.map((representative, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            placeholder={`Representative #${index + 1} name`}
                            value={representative.name}
                            onChange={this.handleRepresentativeNameChange(index)}
                        />
                        <button type="button" onClick={this.handleRemoveRepresentative(index)}>remove</button>
                    </div>
                ))}
                <button type="button" onClick={this.handleAddRepresentative}>Add Representative</button>
                <input type="submit" />
            </form>
        )
    }
}

export default connect()(RepresentativeInputs);