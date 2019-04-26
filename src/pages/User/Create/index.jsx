import React, { useContext, useEffect } from 'react';
import { Typography, Button } from '@material-ui/core';
import { StoreContext } from '../../../flux';
import { createUser } from '../../../flux/user/actions';

export default () => {
  const { state, userDispatch } = useContext(StoreContext);
  const { user } = state;

  const saveUser = () => {
    userDispatch(createUser({ name: 'Pepito' }));
  };
  console.log('state', user);
  return (
    <div>
      <Typography variant={'h3'} gutterBottom>
        {'Formulario Crear Usuario'}
      </Typography>
      <Button
        variant={'contained'}
        color={'primary'}
        // className={classes.button}
        // component={LinkCreate}
        onClick={() => saveUser()}
      >
        {'Guardar'}
      </Button>
    </div>
  );
};
