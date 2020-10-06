import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Search from '@material-ui/icons/Search';

import CustomInput from '../customInput';
import Button from '../customButton';

import styles from '../../../assets/jss/linkStyle';

const style = makeStyles(styles);

function index() {
  const classes = style();

  return (
    <div className={classes.searchWrapper}>
      <CustomInput
        formControlProps={{
          className: classes.margin + ' ' + classes.search,
        }}
        inputProps={{
          placeholder: 'Search',
          inputProps: {
            'aria-label': 'Search',
          },
        }}
      />
      <Button color='white' aria-label='edit' justIcon round>
        <Search />
      </Button>
    </div>
  );
}

export default index;
