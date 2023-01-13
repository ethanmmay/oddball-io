import './App.css'
import Table from './Table'
import Form from './Form'
import React, { Component } from 'react'
import logo from "./logo.svg"

class App extends Component {

  render() {
  const { history } = this.state

  return (
    <div className="container">
      <img src={logo} className="App-logo" alt="React Logo" />
      <Table historyData={history} removeEvent={this.removeEvent} />
      <Form handleSubmit={this.handleSubmit} />
    </div>
  )
  }

  state = {
    history: [],
  }

  removeEvent = (index) => {
  const { history } = this.state

  this.setState({
    history: history.filter((event, i) => {
      return i !== index
    }),
  })
  }

  handleSubmit = (history) => {
    this.setState({ history: [...this.state.history, history] })
  }

}

export default App;
