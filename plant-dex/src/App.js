import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      plants: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ plants: users }))
  }


  render() {
    return (
      <div className="App">
        <input 
        type='search' 
        placeholder='search plants' 
        onChange={ e => { this.setState( 
          { searchField: e.target.value } 
          );
        }}
        />

        <CardList plants={this.state.plants}/>
      </div>
    );
  }
}

export default App;
