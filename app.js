const http = require('http')

http.createServer((req,res) => {
    res.write('Hello world, welcome to node.js application !')
}).listen(3456);

console.log('Application running on port 3456')