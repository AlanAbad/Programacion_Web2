const http = require('http');
const port = 3026;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('hola mundo');
});

server.listen(port, () => {
    console.log(`Servidor: https://127.0.0.1:${port}`);
})