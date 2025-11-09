// socket/index.js
const Message = require('../models/messageModel'); // Make sure this exists

module.exports = (io) => {
  const users = {};
  const messages = [];
  const typingUsers = {};

  io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    // User joins
    socket.on('user_join', (username) => {
      users[socket.id] = { username, id: socket.id };
      io.emit('user_list', Object.values(users));
      io.emit('user_joined', { username, id: socket.id });
      console.log(`${username} joined the chat`);
    });

    // Global chat message
    socket.on('send_message', ({ message }) => {
      const msg = new Message(users[socket.id]?.username || 'Anonymous', message);
      messages.push(msg);
      if (messages.length > 100) messages.shift();
      io.emit('receive_message', msg);
    });

    // Typing indicator
    socket.on('typing', (isTyping) => {
      if (users[socket.id]) {
        const username = users[socket.id].username;
        if (isTyping) typingUsers[socket.id] = username;
        else delete typingUsers[socket.id];
        io.emit('typing_users', Object.values(typingUsers));
      }
    });

    // Private message
    socket.on('private_message', ({ to, message }) => {
      const msgData = new Message(users[socket.id]?.username || 'Anonymous', message);
      socket.to(to).emit('private_message', msgData);
      socket.emit('private_message', msgData);
    });

    // Disconnect
    socket.on('disconnect', () => {
      if (users[socket.id]) {
        io.emit('user_left', { username: users[socket.id].username, id: socket.id });
        console.log(`${users[socket.id].username} left the chat`);
      }
      delete users[socket.id];
      delete typingUsers[socket.id];
      io.emit('user_list', Object.values(users));
      io.emit('typing_users', Object.values(typingUsers));
    });
  });

  return { users, messages, typingUsers };
};

