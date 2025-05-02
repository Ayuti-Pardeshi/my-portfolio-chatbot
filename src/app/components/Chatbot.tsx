import { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState<{ text: string; sender: string }[]>([]);
  const [input, setInput] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add user message
    setMessages([...messages, { text: input, sender: 'user' }]);
    
    // Simulated bot response
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: `Bot: I know Java programming!`, sender: 'bot' },
    ]);

    setInput('');
  };

  return (
    <div className="chatbot-container">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender}>
            <span>{msg.text}</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me something..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;
