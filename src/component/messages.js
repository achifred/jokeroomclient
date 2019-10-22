import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './message';
function Messages({ messages, name }) {
  return (
    <ScrollToBottom>
      {messages.map((item, i) => (
        <div key={i}>
          <Message message={item} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
}

export default Messages;
