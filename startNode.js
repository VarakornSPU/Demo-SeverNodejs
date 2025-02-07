const os = require('os');
const hostname = os.hostname();

//Defind Server
const http = require('http');
const IPServer = '127.0.0.1';
const port = 8000;

const server = http.createServer((req, res) => {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Laboratory : part Create Node.js Server create by 66049472 Varakorn Matures`);
});

server.listen(port, IPServer, () => {
    console.log(`Hostname: ${os.hostname()}`);
    console.log(`Platform: ${os.platform()}`);
    console.log(`Architecture: ${os.arch()}`);
    console.log(`CPU: ${os.cpus().length} cores (${os.cpus()[0].model})`);
    console.log(`Total RAM: ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`);
    console.log(`Free RAM: ${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB`);
    console.log(`Server running at http://${IPServer}:${port}/`);
})