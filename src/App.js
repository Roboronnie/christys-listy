import React, { Component } from 'react';
import './App.css';

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
    let additionalRepresentativeInputs = '';
    let representativeInput = <input type="text" placeholder="Representative" />;

    if(this.state.moreRepresentative === 1){
      additionalRepresentativeInputs = representativeInput;
    } 

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Christy's Listy</h1>
        </header>
        <p>Enter Company Name and Representative(s)</p>
        <label>Company Name: </label>
        <input type="text" placeholder="Company Name" />
        <br />
        <label>Representative: </label>
        <input type="text" placeholder="Representative" />
        {additionalRepresentativeInputs}
        <br />
        <button onClick={this.addMoreRepresentatives}>Add More Representative</button>
      </div>
    );
  }
}

export default App;
