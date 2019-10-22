import React from 'react';
import {
  Grid,
  AppBar,
  makeStyles,
  Toolbar,
  IconButton,
  Typography,
  Button
} from '@material-ui/core';
import { IoMdPerson } from 'react-icons/io';
import { Redirect } from 'react-router-dom';

function Navbar({ room, logout }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <IoMdPerson />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {room}
          </Typography>
          <Button onClick={logout} color="inherit">
            close
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default Navbar;
