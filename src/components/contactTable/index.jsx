import React, { Component } from 'react';
import Table from '../common/table';
import { Link } from 'react-router-dom';

class MoviesTable extends Component {
  columns = [
    {
      path: 'name',
      label: 'Name',
      content: (contact) => (
        <Link to={`/movies/${contact.name}`}>{contact.name}</Link>
      ),
    },
    { path: 'email', label: 'Email' },
    { path: 'city', label: 'City' },
    { path: 'country', label: 'Country' },
    { path: 'createdAt', label: 'Created At' },
    { path: 'modifiedAt', label: 'Modified At' },
  ];
  render() {
    const { contacts, sortColumn, onSort } = this.props;
    return (
      <Table
        columns={this.columns}
        data={contacts}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
