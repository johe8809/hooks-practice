import React, { useContext, useMemo } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { StoreContext } from '../../../flux';
import styles from '../style';

const ButtonAppBar = (props) => {
  const { state } = useContext(StoreContext);
  const { layout } = state;
  const { classes, onOpenMenu, isOpen } = props;
  return useMemo(() => {
    return (
      <AppBar
        position={'fixed'}
        className={classNames(classes.appBar, {
          [classes.appBarShift]: isOpen,
        })}
      >
        <Toolbar disableGutters={!isOpen}>
          <IconButton
            color={'inherit'}
            aria-label={'Open drawer'}
            onClick={() => onOpenMenu(true)}
            className={classNames(classes.menuButton, {
              [classes.hide]: isOpen,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant={'h6'} color={'inherit'} noWrap={true}>
            {layout.title}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }, [props, layout.title]);
};

export default withStyles(styles, { withTheme: true })(ButtonAppBar);
