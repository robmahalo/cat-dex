import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      plants: [],
      searchField: ''
    };

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ plants: users }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }


  render() {
    const { plants, searchField } = this.state;
    const filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(searchField?.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox
          placeholder='search plants'
          handleChange={this.handleChange}
        />
        <CardList plants={filteredPlants}/>
      </div>
    );
  }
}

export default App;
