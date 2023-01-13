import React, { Component } from 'react'

class Form extends Component {
  initialState = {
    prerequest: String,
    prenote: String,
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
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }
}

export default Form;