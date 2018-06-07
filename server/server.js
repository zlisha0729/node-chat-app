const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new user connected');

  // emit event
  socket.emit('newEmail', {
    from: "mike@example.com",
    text: "hey, what's up?"
  });

  socket.emit('newMessage', {
    from: 'zsheg@example.com',
    text: 'Great to meet you',
    createdAt: 123
  })

  socket.on('createEmail', (newEmail) => {
    console.log('createEmail', newEmail);
  });

  socket.on('createMessage', (newMessage) => {
    console.log('createMessage', newMessage);
  })

  // listen for event
  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });


})

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
})
