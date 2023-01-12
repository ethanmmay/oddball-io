import React, { Component } from 'react'

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Request</th>
            <th>Response</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Developer Joke</td>
            <td>Baristas write scripts for Java</td>
          </tr>
          <tr>
            <td>Random Quote</td>
            <td>Do or do not there is no try</td>
          </tr>
          <tr>
            <td>Bionic Font Converter</td>
            <td>Text for Bionic Reading here</td>
          </tr>
          <tr>
            <td>Retrieve a Recipe</td>
            <td>1 ½ cups all-purpose flour, 3 ½ teaspoons baking powder, 1 tablespoon white sugar, ¼ teaspoon salt, or more to taste, 1 ¼ cups milk, 3 tablespoons butter - melted, 1 egg</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Table