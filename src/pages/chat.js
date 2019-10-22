import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import { Grid } from '@material-ui/core';
import Navbar from '../component/navbar';
import Input from '../component/input';
import Messages from '../component/messages';
import ErrorBoundary from '../component/errorBoundary';
let socket;
const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const url = 'localhost:5000';
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(url);
    setName(name);
    setRoom(room);
    socket.emit('join', { name, room });

    return () => {
      socket.emit('disconnect');
      socket.off();
    };
  }, [url, location.search]);

  useEffect(() => {
    socket.on('message', message => {
      setMessages([...messages, message]);
    });
  }, [messages]);
  const sendMessage = event => {
    event.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  //console.log(message, messages);
  return (
    <ErrorBoundary>
      <Grid container>
        <Navbar room={room} />
        <Grid container style={{ justifyContent: 'center' }}>
          <Grid container style={{ justifyContent: 'center' }}>
            <Messages messages={messages} name={name} />
          </Grid>
          <Grid container style={{ justifyContent: 'center' }}>
            <Input
              message={message}
              setMessage={setMessage}
              sendMessage={sendMessage}
            />
          </Grid>
        </Grid>
      </Grid>
    </ErrorBoundary>
  );
};
export default Chat;
