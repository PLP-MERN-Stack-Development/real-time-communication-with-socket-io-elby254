export default function ChatRoom({ messages, typingUsers }) {
  return (
    <div className="h-64 overflow-y-auto mb-2 border rounded p-2 bg-gray-50">
      {messages.map((msg) => (
        <div key={msg.id || Date.now() + Math.random()} className="mb-2">
          {msg.system ? (
            <em className="text-gray-500 text-sm">{msg.message}</em>
          ) : (
            <>
              <strong>{msg.sender}</strong>: {msg.message}
              <span className="text-gray-400 text-xs ml-2">
                {msg.timestamp ? new Date(msg.timestamp).toLocaleTimeString() : ''}
              </span>
            </>
          )}
        </div>
      ))}

      {typingUsers.length > 0 && (
        <div className="text-sm text-gray-500 italic">
          {typingUsers.join(', ')} {typingUsers.length === 1 ? 'is' : 'are'} typing...
        </div>
      )}
    </div>
  );
}


