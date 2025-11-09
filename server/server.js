const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const config = require('./config'); // Make sure this exports CLIENT_URL and PORT

dotenv.config();

const app = express();
const server = http.createServer(app);

// Socket.io setup
const io = new Server(server, {
  cors: {
    origin: config.CLIENT_URL,
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Socket logic
require('./socket')(io); // pass `io` correctly

// API routes
const chatController = require('./controllers/chatController');
app.get('/api/messages', chatController.getMessages);
app.get('/api/users', chatController.getUsers);

// Root
app.get('/', (req, res) => res.send('Socket.io Chat Server is running'));

// Start server
server.listen(config.PORT, () => console.log(`Server running on port ${config.PORT}`));

module.exports = { app, server, io };

 