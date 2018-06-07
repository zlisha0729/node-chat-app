var socket = io();
socket.on('connect', function() {
  console.log('Connected to server');

  socket.emit('createEmail', {
    to: 'jen@example.com',
    text: 'Hey. This is Lisha'
  });

  socket.emit('createMessage', {
    from: "gewgw@gmail.com",
    text: "Nice to meet you"
  })
});



socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

socket.on('newEmail', function(email) {
  console.log('New email', email);
})

socket.on('newMessage', function(message) {
  console.log('New message', message);
})
