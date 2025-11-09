# Real-Time Chat Application with Socket.io

## Overview
This project is a real-time chat application built using **React (Vite)** for the frontend and **Node.js with Express and Socket.io** for the backend. It allows users to log in with a username, send messages, see who is online, and view typing indicators in real time.

The application uses **Tailwind CSS v4** for styling and has been built as part of an assignment task.

---

## Project Structure

### Client (Frontend)

### Server (Backend)

---

## Tasks Completed

1. **Project Setup**
   - Initialized frontend with Vite + React.
   - Installed and configured Tailwind CSS v4.
   - Initialized backend with Express and Socket.io.
   - Set up `.env` files for configuration.

2. **Frontend Implementation**
   - Implemented login page for username entry (`Login.jsx`).
   - Created `ChatPage.jsx` for the main chat interface.
   - Built `MessageInput.jsx` component to send messages.
   - Built `ChatRoom.jsx` component to display messages and typing indicators.
   - Created React context (`UserContext.jsx`) to manage username state.
   - Created `useAuth` hook for login/logout handling.
   - Implemented `useSocket` hook to manage Socket.io client logic (connect, disconnect, send/receive messages, typing indicators).
   - Ensured messages display correctly without React errors.
   - Handled unique keys for message rendering to prevent duplicate key issues.

3. **Backend Implementation**
   - Created `server.js` to initialize Express server and Socket.io.
   - Configured Socket.io to handle:
     - User connection/disconnection
     - Broadcasting messages
     - Typing indicators
     - Private messages
   - Created `models/messageModel.js` for message structure.
   - Created `controllers/chatController.js` for API routes (`/api/messages` and `/api/users`).
   - Created `socket/index.js` for socket event handling.

4. **Real-Time Features**
   - Users can join with a username.
   - Online users list is displayed.
   - Users can send and receive messages in real time.
   - Typing indicators show who is typing.
   - Private messaging functionality is supported.

5. **Styling**
   - Tailwind CSS v4 was used for all frontend styling.
   - Simple and clean UI with responsive layout.
   - No additional CSS frameworks used.

6. **Running the Project**
   - Backend:
     ```bash
     cd server
     npm install
     npm run dev
     ```
     Runs on `http://localhost:5000`.

   - Frontend:
     ```bash
     cd client
     npm install
     npm run dev
     ```
     Runs on `http://localhost:5173`.

---

## Notes
- Messages are stored in memory (not persistent) and capped at 100 messages to prevent memory issues.
- Environment variables:
  - `PORT` – Backend server port.
  - `CLIENT_URL` – Frontend URL for CORS.
  - `VITE_SOCKET_URL` – Frontend Socket.io connection URL.

---

## Assignment Completion
All the tasks for setting up a **real-time chat application** with:
- User login
- Real-time messaging
- Typing indicators
- Online users
- Tailwind CSS styling