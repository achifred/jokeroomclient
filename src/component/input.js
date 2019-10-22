import React from 'react';
import { Grid, Button, TextField, makeStyles } from '@material-ui/core';
import { FiCornerUpRight } from 'react-icons/fi';

function Input({ message, setMessage, sendMessage }) {
  const classes = Styles();
  return (
    <div>
      <Grid
        container
        style={{
          textAlign: 'center',
          //width: '60%',
          position: 'fixed',
          marginLeft: -100,
          bottom: -20
        }}
      >
        <form className={classes.inputform}>
          <TextField
            type="text"
            placeholder="say something..."
            value={message}
            className={classes.input}
            onChange={event => setMessage(event.target.value)}
            onKeyPress={event =>
              event.key === 'Enter' ? sendMessage(event) : null
            }
          />
          <Button
            className={classes.sendbtn}
            onClick={event => sendMessage(event)}
          >
            <FiCornerUpRight style={{ fontSize: 25, color: 'blue' }} />
          </Button>
        </form>
      </Grid>
    </div>
  );
}
const Styles = makeStyles(theme => ({
  inputform: {
    display: 'flex',
    justifyContent: 'center'
    //position: 'absolute'
    //bottom: 0
  },
  sendbtn: {
    padding: '15px',
    display: 'inline-block'
  },
  input: {
    //padding: '5%'
  }
}));
export default Input;
