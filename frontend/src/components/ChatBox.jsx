
import React, { useState, useEffect, useRef } from 'react';
import './ChatBox.css';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const messageEndRef = useRef(null);


  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const message = {
      text: newMessage,
      sender: 'You',
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  return (
    <div className="chat-box">
      <div className="chat-header">Student Chat</div>

      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-message ${
              msg.sender === 'You' ? 'own-message' : 'other-message'
            }`}
          >
            <div className="message-text">{msg.text}</div>
            <div className="message-info">
              <span>{msg.sender}</span> · <span>{msg.timestamp}</span>
            </div>
          </div>
        ))}
        <div ref={messageEndRef} />
      </div>

      <div className="chat-input-container">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
