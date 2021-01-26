import React, { useState } from 'react';
import './App.css';

function App() {
  const [ input, setInput ] = useState(''); // empty string
  const [ messages, setMessages ] = useState(['a', 'aa', 'aaa', 'aaaa']);

  console.log(input);
  console.log(messages);

  const sendMessage = () => {
    setMessages([...messages, input]);
    setInput('');
  }
  return (
    <div className="App">
      <h1>Messanger</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={sendMessage}>Send Message</button>

      {messages.map(message => (
        <p>{message}</p>
      ))}
    </div>
  );
}

export default App;
