import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListGroup from '../common/listGroup';
import { withStyles } from '@material-ui/core';
import { EditIcon, DeleteIcon } from '@material-ui/icons';
import _ from 'lodash';
//core components
import GridItem from '../common/grid/gridItem';
import GridContainer from '../common/grid/gridContainer';
import Table from '../common/table';
import Card from '../common/card/card';
import CardHeader from '../common/card/cardHeader';
import CardBody from '../common/card/cardBody';
import CardFooter from '../common/card/cardFooter';
import { paginate } from '../../utils/paginate';
import ContactTable from '../contactTable';
import Pagination from '../common/pagination';

const profileImage =
  'https://res.cloudinary.com/wfdns6x2g6/image/upload/v1509007989/user_psolwi.png';

const styles = {
  cardCategoryWhite: {
    '&,& a,& a:hover,& a:focus': {
      color: 'rgba(255,255,255,.62)',
      margin: '0',
      fontSize: '14px',
      marginTop: '0',
      marginBottom: '0',
    },
    '& a,& a:hover,& a:focus': {
      color: '#FFFFFF',
    },
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none',
    '& small': {
      color: '#777',
      fontSize: '65%',
      fontWeight: '400',
      lineHeight: '1',
    },
  },
};

class index extends Component {
  state = {
    selectedContact: 'Arslan',
    contacts: [],
    currentPage: 1,
    pageSize: 4,
    searchQuery: '',
    selectedGenre: null,
    sortColumn: { path: 'name', order: 'asc' },
  };

  componentDidMount() {
    this.setState({ contacts: this.props.contacts });
  }
  handlePageChange = (currentPage) => {
    this.setState({ currentPage });
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  getPageData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      contacts: allContacts,
    } = this.state;
    let filtered = allContacts;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const contacts = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: contacts };
  };

  render() {
    const { classes } = this.props;
    const { length: count } = this.state.contacts;
    const { pageSize, currentPage, sortColumn } = this.state;
    if (count === 0) {
      return <h4>There are no contacts in the database.</h4>;
    }

    const { totalCount, data } = this.getPageData();
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color='primary'>
              <h4 className={classes.cardTitleWhite}>All Contacts</h4>
              <p className={classes.cardCategoryWhite}>
                Here is all contacts with details
              </p>
            </CardHeader>
            <CardBody>
              <ContactTable
                contacts={data}
                sortColumn={sortColumn}
                onSort={this.handleSort}
              />
            </CardBody>
            <CardFooter>
              <Pagination
                itemsCount={totalCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={this.handlePageChange}
              />
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

index.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    contacts: state,
  };
}

export default connect(mapStateToProps)(withStyles(styles)(index));
