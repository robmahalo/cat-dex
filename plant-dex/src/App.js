import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';

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
    const { plants, searchField } = this.state;
    const filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(searchField?.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox
          placeholder='search plants'
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList plants={filteredPlants}/>
      </div>
    );
  }
}

export default App;
