import React, { Component } from 'react';
import Cat from './components/cat/cat.js'
import kitten from './kitten.jpg';
import kitty from './kitty.jpg'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Cat name='lil floof' image={kitten}/>
          <Cat name='beeg floof' image={kitty}/>
        </header>
      </div>
    );
  }
}

export default App;
