const WebSocket = require('ws');

module.exports = (server) => {
    const wss = new WebSocket.Server({server});

    wss.on('connection', (ws, req) => { // 클라이언트가 웹소켓과 연결을 맺을 때 발생합니다.
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress; // 사용자 IP 가져오는 거
        console.log('새로운 클라이언트 접속', ip);
        ws.on('message', (message) => { // 클라이언트로부터 메세지가 왔을 때 발생
            console.log(message);
        });
        ws.on('error', (error) => { // 웹소켓 연결 중 문제가 생기면 발생
            console.error(error);
        });
        ws.on('close', () => { // 클라이언트와 연결이 끊어졌을 경우 발생
            console.log('클라이언트 접속 해제',  ip);
            clearInterval(ws.interval);
        });
        ws.interval = setInterval(() => { // 3초마다 연결되 모든 클라이언트에게 메세지를 보낸다.
            if(ws.readyState === ws.OPEN){ // readyState에는 네가지 상태가 존재. CONNECTING(연결중), OPEN(열림), CLOSING(닫는 중), CLOSED(닫힘)
                ws.send('서버에서 클라이언트로 메세지를 보냅니다.');
            }
        }, 3000);
    });

};