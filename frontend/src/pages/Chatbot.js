import React, { useState } from 'react';
import '../styles/Chatbot.scss';

function Chatbot() {
  const [messages, setMessages] = useState([
    { role: 'system', content: 'I can foresee the future. Tell me what you want to know.' },
  ]);
  const [userInput, setUserInput] = useState('');

  const sendMessage = async () => {
    const newMessages = [...messages, { role: 'user', content: userInput }];
    setMessages(newMessages);

    try {
        //Sending API request and getting response
        const response = await fetch('http://localhost:3000/api/chat', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ messages: newMessages }),
          }); 
        
          if (!response.ok) {
            throw new Error('Failed to fetch response from server');
          }

          const data = await response.json();
          const aiReply = data.choices[0].message;
          setMessages((prev) => [...prev, aiReply]);
          setUserInput('');
    } catch (error) {
        console.error('Error fetching response:', error.message);
        alert(`Error: ${error.message}`);
    }
  };

  return (
    <div>
    <div className='mainTitle'>Welcome to Magic World</div>
    <div className='subTitle'>send your messages in any language</div>
    <div className='chatContainer'>
      <div className='chatBox'>
      {/* Dynamic rendering of chat content */}
      <div className='messages'>
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.role === 'user' ? 'user' : 'ai'}`}>
            <p>
              <strong>{msg.role === 'user' ? 'You' : 'Fortune Teller'}:</strong> {msg.content}
            </p>
          </div>
        ))}
      </div>
        {/* User input area */}
        <div className='inputContainer'>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder='Enter your concerns'
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Chatbot;
