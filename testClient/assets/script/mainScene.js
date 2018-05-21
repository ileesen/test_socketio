cc.Class({
    extends: cc.Component,

    properties: {

    },


    onLoad() {
        const socket = io('http://localhost:3000');
        cc.log(socket);
        socket.on('welcome', function (data) {
            cc.log('链接服务器成功。');
            socket.emit('msg', {
                data: '我来啦'
            });
        });
    },

    start() {

    },

    // update (dt) {},
});
