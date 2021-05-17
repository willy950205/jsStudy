const SSE =  require('sse');

module.exports = (server) =>{
    const sse = new SSE(server);
    sse.on('connection', (client) => {
        setInterval(() => {
            client.sed(Date.now().toString());
        }, 1000);
    });
};