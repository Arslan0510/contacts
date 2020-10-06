import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../common/materialSearch';

export class index extends Component {
  state = {
    contacts: '',
    searchQuery: '',
  };
  componentDidMount() {
    this.setState({ contacts: this.props.contacts });
  }
  handleSearch = (searchQuery) => {
    this.setState({ searchQuery });
  };

  render() {
    return (
      <div>
        <h1>Edit Contact</h1>
        <Search />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contacts: state,
  };
}

export default connect(mapStateToProps)(index);
