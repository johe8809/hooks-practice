import React, { Fragment } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Drawer, List, Divider, ListItem, ListItemIcon, ListItemText, IconButton } from '@material-ui/core';
import { ChevronLeft, ChevronRight, AccountCircle, Home } from '@material-ui/icons';
import styles from '../style';

const LinkHome = (props) => <Link to={'/'} {...props} />;
const LinkUsers = (props) => <Link to={'/users'} {...props} />;

const _Drawer = (props) => {
  const { classes, theme, onCloseMenu, isOpen } = props;
  return (
    <Fragment>
      <Drawer
        variant={'permanent'}
        className={classNames(classes.drawer, {
          [classes.drawerOpen]: isOpen,
          [classes.drawerClose]: !isOpen,
        })}
        classes={{
          paper: classNames({
            [classes.drawerOpen]: isOpen,
            [classes.drawerClose]: !isOpen,
          }),
        }}
        open={isOpen}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={() => onCloseMenu(false)}>
            {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem component={LinkHome}>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary={'Home'} />
          </ListItem>
          <ListItem component={LinkUsers}>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary={'Usuarios'} />
          </ListItem>
        </List>
      </Drawer>
    </Fragment>
  );
};

export default withStyles(styles, { withTheme: true })(_Drawer);
