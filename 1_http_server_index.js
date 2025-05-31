const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Hello World from localhost : Sai Gopi Narimeti");
});
const PORT = 3000;
server.listen(PORT,() => {
    console.log(`Started server at http://localhost:${PORT}`)
});