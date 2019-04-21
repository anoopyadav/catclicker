import React, {Component} from 'react';
class Cat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0,
      name: props.name,
      image: props.image,
    };
    this.incrementClickCount = this.incrementClickCount.bind(this);
  }

  incrementClickCount() {
    this.setState({clickCount:this.state.clickCount + 1})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={this.state.image} alt="logo"
          onClick={this.incrementClickCount}/>
          <p>
            Click {this.state.name} for Profit!
          </p>
          <p>You have clicked {this.state.clickCount} times.</p>
        </header>
      </div>
    );
  }
}

export default Cat;