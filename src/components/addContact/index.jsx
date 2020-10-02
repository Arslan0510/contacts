import React, { useState } from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core';
import moment from 'moment';
// core components
import GridItem from '../common/grid/gridItem';
import GridContainer from '../common/grid/gridContainer';
import CustomInput from '../common/customInput';
import Button from '../common/customButton';
import Card from '../common/card/card';
import CardHeader from '../common/card/cardHeader';
import CardAvatar from '../common/card/cardAvatar';
import CardBody from '../common/card/cardBody';
import CardFooter from '../common/card/cardFooter';

import avatar from '../../assets/img/marc.jpg';

//redux
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/actions';

const styles = {
  cardCategoryWhite: {
    color: 'rgba(255,255,255,.62)',
    margin: '0',
    fontSize: '14px',
    marginTop: '0',
    marginBottom: '0',
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none',
  },
  rootContainer: {
    marginTop: 50,
  },
};

const useStyles = makeStyles(styles);

export default function AddContact() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    country: '',
  });
  const handleInputChange = (arg1, arg2) => {
    // data[arg2] = arg1;
    setData((prevState) => ({ ...prevState, [arg2]: arg1 }));
  };
  const handleClick = () => {
    const name = data.firstName + ' ' + data.lastName;
    const date = moment().format('Do MMMM YYYY, h:mm:ss a');
    dispatch(
      addContact({
        name,
        email: data.email,
        city: data.city,
        country: data.country,
        pic: avatar,
        modifiedDate: date,
        createdDate: date,
      })
    );
  };
  return (
    <div className={classes.rootContainer}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color='primary'>
              <h4 className={classes.cardTitleWhite}>Add Contact</h4>
              <p className={classes.cardCategoryWhite}>Complete your profile</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText='First Name'
                    id='first-name'
                    inputProps={{ name: 'firstName' }}
                    handleInputChange={handleInputChange}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText='Last Name'
                    id='last-name'
                    inputProps={{ name: 'lastName' }}
                    handleInputChange={handleInputChange}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText='Email address'
                    id='email-address'
                    inputProps={{ name: 'email' }}
                    handleInputChange={handleInputChange}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText='City'
                    id='city'
                    inputProps={{ name: 'city' }}
                    handleInputChange={handleInputChange}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText='Country'
                    id='country'
                    inputProps={{ name: 'country' }}
                    handleInputChange={handleInputChange}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color='primary' onClick={handleClick}>
                Add Contact
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href='#pablo' onClick={(e) => console.log('Pic clicked')}>
                <img src={avatar} alt='...' />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h4 className={classes.cardTitle}>
                {data.firstName ? data.firstName : 'John'}{' '}
                {data.lastName ? data.lastName : 'Smith'}
              </h4>
              <h6 className={classes.cardCategory}>
                {data.email ? data.email : 'Johnsmith@gmail.com'}
              </h6>
              <p className={classes.cardCategory}>
                {data.city ? data.city : 'London'},{' '}
                {data.country ? data.country : 'GB'}
              </p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
