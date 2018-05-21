var io = require('socket.io')(3000);
io.on('connection', function (socket) {
  //连接成功...
  console.log(socket.id,'：连接成功...')
  // console.log('：连接成功...')
  socket.emit('welcome', )

  socket.on('msg', function (data) {
    // console.log(data)
  })








  //当客户端离开时
  socket.on('disconnect', function () {
    console.log(socket.id, '用户已经离开...')
  });
});