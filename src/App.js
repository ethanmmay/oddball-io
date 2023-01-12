import './App.css';
import Table from './Table';
import React, { Component } from 'react'

class App extends Component {
  render() {
    const history = [
      {
        request: 'Developer Joke',
        response: 'Baristas write script for Java',
      },
      {
        request: 'Random Quote',
        response: 'Do or do not there is no try',
      },
      {
        request: 'Bionic Font Converter',
        response: 'Text for Bionic Reading here',
      },
      {
        request: 'Retrieve a Recipe',
        response: '1 ½ cups flour, 1 tbsp sugar...',
      },
    ]

    return (
      <div className="container">
        <Table />
      </div>
    )
  }
}

export default App;
