import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

export default function Login({ onLogin }) {
  const [name, setName] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      login(name);
      onLogin();
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md w-80">
      <h2 className="text-xl font-semibold mb-4 text-center">Enter Username</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border w-full p-2 mb-3 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Join Chat
        </button>
      </form>
    </div>
  );
}
