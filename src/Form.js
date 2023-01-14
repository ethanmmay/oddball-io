import React, { Component } from 'react'
import Api from './Api';

class Form extends Component {
  initialState = {
    request: '',
    note: '',
  }
  state = this.initialState
  render() {
  const { request, note } = this.state;

  return (
    <form>
      <label htmlFor="request">Request</label>
      <select
        type="text"
        name="request"
        id="request"
        value={request}
        onChange={this.handleChange}>
            <option value=""></option>
            <option value="devjoke">Random Dev Joke</option>
      </select>
      <label htmlFor="note">Note</label>
      <input
        type="text"
        name="note"
        id="note"
        value={note}
        onChange={this.handleChange} />
        <input type="button" value="Submit" onClick={this.submitForm} />
    </form>
  );
}

  handleChange = (event) => {
  console.log(event.target)
  const { name, value } = event.target

  this.setState({
    [name]: value,
  })
  }

  submitForm = () => {
    // Combine form data + response
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }
}

export default Form;