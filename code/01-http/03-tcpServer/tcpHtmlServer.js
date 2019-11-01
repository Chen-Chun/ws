var net = require('net');

var server = net.createServer(function(socket) {
  let html = 'Hello World! <a href="http://tw.youtube.com">YouTube</a>'
  console.log('html=', html)
  socket.write('HTTP/1.0 200 OK\nContent-Type: text/html\nContent-Length: '+html.length+'\n\n'+html)
  socket.end()
});

server.listen(3000, '127.0.0.1')
console.log(`Server running at http://localhost:3000/`);