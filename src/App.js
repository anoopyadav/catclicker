import React, { Component } from 'react';
import Cat from './components/cat/cat.js'
import kitten from './kitten.jpg';
import kitty from './kitty.jpg'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Cat className="Cat-container" name='lil floof' image={kitten}/>
          <Cat className="Cat-container" name='beeg floof' image={kitty}/>
      </div>
    );
  }
}

export default App;
