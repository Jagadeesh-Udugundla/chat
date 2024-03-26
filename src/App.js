import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import './ChatApp.css'; 

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleMessageSend = () => {
    if (inputText.trim() === '') return;
    
    const randomUser = user_list[Math.floor(Math.random() * user_list.length)];
    const newMessage = {
      text: inputText,
      user: randomUser,
      likes: 0
    };
    
    setMessages([...messages, newMessage]);
    setInputText('');
  };

  const handleLikeClick = index => {
    const updatedMessages = [...messages];
    updatedMessages[index].likes += 1;
    setMessages(updatedMessages);
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <div className="user-badge">{message.user.charAt(0)}</div>
            <div className="user">{message.user}</div>
            <div className="message-content">
              {/* <div className="user">{message.user}</div> */}
              <div className="text">{message.text}</div>
              <button className="like-btn" onClick={() => handleLikeClick(index)}>
              <FontAwesomeIcon icon={faThumbsUp} /> <span>{message.likes}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          className="input-box"
          placeholder="Type your message..."
          value={inputText}
          onChange={e => setInputText(e.target.value)}
        />
        <button className="send-btn" onClick={handleMessageSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatApp;
