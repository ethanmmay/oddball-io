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

const TableBody = (props) => {
  const rows = props.historyData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.request}</td>
        <td>{row.response}</td>
        <td>
        <button onClick={() => props.removeEvent(index)}>Delete</button>
        </td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

class Table extends Component {
  render() {
    const { historyData, removeEvent } = this.props

    return (
      <table>
        <TableHeader />
        <TableBody historyData={historyData} removeEvent={removeEvent} />
      </table>
    )
  }
}

export default Table