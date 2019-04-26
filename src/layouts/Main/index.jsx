import React, { useState, useMemo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from './AppBar';
import Drawer from './Drawer';
import styles from './style';

const Main = (props) => {
  const { classes, children } = props;

  const [drawerState, setDrawerState] = useState(false);
  const onChangeDrawerState = (state) => {
    setDrawerState(state);
  };
  return useMemo(() => {
    return (
      <div className={classes.root}>
        <AppBar onOpenMenu={onChangeDrawerState} isOpen={drawerState} />
        <Drawer onCloseMenu={onChangeDrawerState} isOpen={drawerState} />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </div>
    );
  }, [children, drawerState]);
};

export default withStyles(styles)(Main);
