import { Component } from 'react'

class Api extends Component {
  state = {
    data: [],
  }

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    const url =
      'https://backend-omega-seven.vercel.app/api/getjoke'

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          data: result,
        })
      })
  }

  render () {
    return (
      <p>Request Placeholder</p>
    )
  }
}

export default Api