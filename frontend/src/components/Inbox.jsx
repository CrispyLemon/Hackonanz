// Inbox.jsx
import React, { useState } from 'react';
import './Inbox.css';

const messages = [
  { id: 1, sender: 'Alice Johnson', subject: 'Homework Submission', preview: 'Hi, I just submitted my homework. Please check it!' },
  { id: 2, sender: 'Bob Smith', subject: 'Group Project', preview: 'Hey, when are we meeting for the group project?' },
  { id: 3, sender: 'Charlie Brown', subject: 'Question about Assignment', preview: 'I have a question regarding the last assignment.' },
  { id: 4, sender: 'Diana Prince', subject: 'Class Notes', preview: 'I’ve shared the class notes with you!' },
  { id: 5, sender: 'Eve Adams', subject: 'Exam Schedule', preview: 'The exam schedule has been updated.' },
];

const Inbox = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMessages = messages.filter(message =>
    message.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="inbox">
      <h2>Inbox</h2>
      <input
        type="text"
        placeholder="Search messages..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <ul className="message-list">
        {filteredMessages.length > 0 ? (
          filteredMessages.map((message) => (
            <li key={message.id} className="message-item">
              <div className="message-details">
                <div className="message-sender">{message.sender}</div>
                <div className="message-subject">{message.subject}</div>
                <div className="message-preview">{message.preview}</div>
              </div>
            </li>
          ))
        ) : (
          <li className="no-messages">No messages found.</li>
        )}
      </ul>
    </div>
  );
};

export default Inbox;
