import { useState } from 'react';
import { useUser } from '../context/UserContext';

export default function MessageInput({ onSend, onTyping }) {
  const [text, setText] = useState('');
  const { username } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      // Use `sender` key to match ChatRoom.jsx
      onSend({ sender: username, message: text });
      setText('');
      onTyping(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2">
      <input
        type="text"
        value={text}
        placeholder="Type a message..."
        onChange={(e) => {
          setText(e.target.value);
          onTyping(true);
        }}
        className="flex-1 border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Send
      </button>
    </form>
  );
}


