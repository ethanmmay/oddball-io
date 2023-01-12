import React, { Component } from 'react'

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Request</th>
        <th>Response</th>
      </tr>
    </thead>
  )
}

const TableBody = () => {
  return (
    <tbody>
      <tr>
        <td>Developer Joke</td>
        <td>Baristas write script for Java</td>
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
        <td>1 ½ cups flour, 3 ½ tsp's baking powder, 1 tbsp sugar, ¼ tsp salt, 1 ¼ cups milk, 3 tbsp's butter - melted, 1 egg</td>
      </tr>
    </tbody>
  )
}

class Table extends Component {
  render() {
    return (
      <table>
        <TableHeader />
        <TableBody />
      </table>
    )
  }
}

export default Table