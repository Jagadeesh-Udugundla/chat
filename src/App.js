import React, { useState } from 'react';
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
            <span className="user">{message.user}</span>
            <span className="text">{message.text}</span>
            <button className="like-btn" onClick={() => handleLikeClick(index)}>
              Like ({message.likes})
            </button>
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
