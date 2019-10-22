import React from 'react';
import { makeStyles } from '@material-ui/core';

function Message({ message: { user, text }, name }) {
  const classes = Styles();
  let isSentbyCurrentuser = false;
  const Name = name.trim().toLowerCase();
  if (user === Name) {
    isSentbyCurrentuser = true;
  }
  return isSentbyCurrentuser ? (
    <div className={classes.messageContainerIn}>
      <p className={classes.sentTextIn}>{Name}</p>
      <div className={classes.messageBoxIn}>
        <p className={classes.messageText}>{text}</p>
      </div>
    </div>
  ) : (
    <div className={classes.messageContainerOut}>
      <div className={classes.messageBoxOut}>
        <p className={classes.messageText}>{text}</p>
      </div>
      <p className={classes.sentTextout}>{user}</p>
    </div>
  );
}

const Styles = makeStyles(theme => ({
  messageContainerIn: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 10,
    padding: '0 5%'
  },
  messageContainerOut: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: 10,
    padding: '0 5%'
  },
  sentTextIn: {
    display: 'flex',
    paddingRight: 10
  },
  sentTextout: {
    display: 'flex',
    paddingLeft: 10
  },
  messageBoxIn: {
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    maxWidth: '80%',
    display: 'inline-block',
    padding: '5px 10px',
    backgroundColor: 'blue'
  },
  messageBoxOut: {
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    maxWidth: '80%',
    display: 'inline-block',
    padding: '5px 10px',
    backgroundColor: 'orange'
  },
  messageText: {
    //width: '100%',
    letterSpacing: 0,
    float: 'left',
    wordWrap: 'break-word',
    fontSize: 14
  }
}));
export default Message;
