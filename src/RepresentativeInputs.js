import React, { Component } from 'react';

class RepresentativeInputs extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
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

    handleSubmit = () => {
        const { name, representatives } = this.state;
        alert(`Incorporated: ${name} with ${representatives.length} representatives`);
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

    render() {
        console.log(this.state.representatives)
        return (
            <form onSubmit={this.handleSubmit}>
                <h4>Representatives</h4>
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
            </form>
        )
    }
}

export default RepresentativeInputs;