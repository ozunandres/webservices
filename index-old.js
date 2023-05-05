const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, {'Content-Type': 'application/json'});
        const obj = {
            firstname: 'John',
            lastname: 'Doe'
        };
        res.write(JSON.stringify(obj));
        res.end();
    }
).listen(8080);
console.log('Server started on port 8080');
