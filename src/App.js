import React, { Component } from 'react';
import kitten from './kitten.jpg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {clickCount: 0};
    this.incrementClickCount = this.incrementClickCount.bind(this);
  }

  incrementClickCount() {
    this.setState({clickCount:this.state.clickCount + 1})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={kitten} alt="logo" onClick={this.incrementClickCount}/>
          <p>
            Click the kitten for Profit!
          </p>
          <p>You have clicked {this.state.clickCount} times.</p>
        </header>
      </div>
    );
  }
}

export default App;
