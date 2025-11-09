import { useState } from 'react';
import Login from './pages/Login';
import ChatPage from './pages/ChatPage';
import { UserProvider } from './context/UserContext';

export default function App() {
  // Tracks whether user has logged in
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <UserProvider>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        {/* Show Login page if not logged in */}
        {!loggedIn ? (
          <Login onLogin={() => setLoggedIn(true)} />
        ) : (
          // Otherwise show the Chat page
          <ChatPage />
        )}
      </div>
    </UserProvider>
  );
}

