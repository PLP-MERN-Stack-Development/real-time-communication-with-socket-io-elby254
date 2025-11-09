import { useUser } from '../context/UserContext';

// Simple username-based login
export const useAuth = () => {
  const { username, setUsername } = useUser();

  const login = (name) => {
    if (name.trim()) setUsername(name.trim());
  };

  const logout = () => setUsername('');

  return { username, login, logout };
};
