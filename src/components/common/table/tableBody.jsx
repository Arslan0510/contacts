import React, { Component } from 'react';

export class TableBody extends Component {
  render() {
    const { data } = this.props;
    return (
      <tbody>
        {data &&
          data.map((item) => (
            <tr key={item.email}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.city}</td>
              <td>{item.country}</td>
              <td>{item.createdDate}</td>
              <td>{item.modifiedDate}</td>
            </tr>
          ))}
      </tbody>
    );
  }
}

export default TableBody;
