import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      plants: [
        { name: 'Snake' },
        { name: 'Aloe Vera' },
        { name: 'Hibiscus' },
      ]
    };
  }

  render() {
    return (
      <div className="App">
        { this.state.plants.map (
          plant => (
            <h1> { plant.name }</h1>
          )
        )
      }
      </div>
    );
  }
}

export default App;
