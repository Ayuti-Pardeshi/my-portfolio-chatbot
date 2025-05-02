'use client';

import { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState<{ text: string; sender: string }[]>([]);
  const [input, setInput] = useState<string>('');

  // Define your skillset data (for a fresher SDE)
  const skills: { [key: string]: string } = {
    java: 'I know Java programming and have worked on various basic projects.',
    javascript: 'I am familiar with JavaScript, including ES6 features and basic DOM manipulation.',
    react: 'I have hands-on experience with React for building dynamic web applications.',
    html: 'I am proficient in HTML and can create structured, semantic web pages.',
    css: 'I have experience with CSS and can style web pages responsively and effectively.',
    dsa: 'I am familiar with Data Structures and Algorithms, including arrays, linked lists, trees, and sorting algorithms.',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Add user message to chat
    setMessages([...messages, { text: input, sender: 'user' }]);

    // Cast the input to lowercase and check for a matching skill
    const skillKey = Object.keys(skills).find(skill =>
      input.toLowerCase().includes(skill)
    ) as keyof typeof skills; // This ensures TypeScript understands the key will be a valid skill

    let botResponse = '';

    if (skillKey) {
      // If a skill matches, return the corresponding response
      botResponse = skills[skillKey];
    } else {
      // If no skill matches, inform the user
      botResponse = "I'm sorry, I don't have knowledge of that skill yet.";
    }

    // Add bot response to the chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: `Bot: ${botResponse}`, sender: 'bot' },
    ]);

    // Clear the input field
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
