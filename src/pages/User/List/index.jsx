import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from '../style';

const LinkCreate = (props) => <Link to={'/user'} {...props} />;

const ListUsers = (props) => {
  const { classes } = props;
  return (
    <div>
      <Button variant={'contained'} color={'primary'} className={classes.button} component={LinkCreate}>
        {'Crear Usuario'}
      </Button>
    </div>
  );
};

export default withStyles(styles)(ListUsers);
