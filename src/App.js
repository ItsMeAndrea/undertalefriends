import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
import { characters } from './characters';
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      characters: characters,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })

  }

  render() {
    const filteredCharac = this.state.characters.filter(characters => {
      return characters.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className='tc' >
        <h1 className='f1'>UNDERTALE</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList characters={filteredCharac} />
      </div>
    )
  }

}

export default App;