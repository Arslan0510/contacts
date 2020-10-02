import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBox from '../common/search';

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
    const { searchQuery } = this.state;
    return (
      <div>
        <h1>Edit Contact</h1>
        <SearchBox value={searchQuery} onChange={this.handleSearch} />
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
