import { useEffect } from 'react';
import { useUser } from '../context/UserContext';
import { useSocket } from '../socket/socket';
import ChatRoom from '../components/ChatRoom';
import MessageInput from '../components/MessageInput';

export default function ChatPage() {
  const { username } = useUser();
  const { connect, disconnect, sendMessage, messages, typingUsers, users, setTyping } = useSocket();

  useEffect(() => {
    if (username) connect(username);
    return () => disconnect();
  }, [username]);

  return (
    <div className="bg-white p-4 rounded shadow-md w-full max-w-lg">
      <h2 className="text-lg font-semibold mb-2">Logged in as: {username}</h2>
      <h3 className="text-sm text-gray-500 mb-2">
        Online: {users.map((u) => u.username).join(', ')}
      </h3>
      <ChatRoom messages={messages} typingUsers={typingUsers} />
      <MessageInput onSend={sendMessage} onTyping={setTyping} />
    </div>
  );
}
