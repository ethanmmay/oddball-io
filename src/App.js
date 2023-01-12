import './App.css';
import Table from './Table';
import React, { Component } from 'react'
import logo from "./logo.svg"

class App extends Component {

  render() {
  const { history } = this.state

  return (
    <div className="container">
      <img src={logo} className="App-logo" alt="React Logo" />
      <Table historyData={history} removeEvent={this.removeEvent} />
    </div>
  )
  }

  state = {
    history: [
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
      }
    ]
  }

  removeEvent = (index) => {
  const { history } = this.state

  this.setState({
    history: history.filter((event, i) => {
      return i !== index
    }),
  })
  }

}

export default App;
