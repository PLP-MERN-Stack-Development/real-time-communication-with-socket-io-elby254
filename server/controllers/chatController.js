const { messages, users } = require('../socket');

// GET all messages
exports.getMessages = (req, res) => {
  res.json(messages);
};

// GET all online users
exports.getUsers = (req, res) => {
  res.json(Object.values(users));
};
