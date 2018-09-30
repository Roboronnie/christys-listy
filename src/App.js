import React, { Component } from 'react';
import './App.css';
import RepresentativeInputs from './RepresentativeInputs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moreRepresentative: 0,
    }
  }

  addMoreRepresentatives = () => {
    console.log('before click: ', this.state.moreRepresentative);
    this.setState({
      moreRepresentative: this.state.moreRepresentative + 1
    });
  };

  render() {
    console.log('in render: ', this.state.moreRepresentative);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Christy's Listy</h1>
        </header>
        <p>Enter Company Name and Representative(s)</p>
        <label>Company Name: </label>
        <input type="text" placeholder="Company Name" />
        <br />
        <RepresentativeInputs />
      </div>
    );
  }
}

export default App;
