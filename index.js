const http = require('node:http');
const fs = require('node:fs')

const hostname = '127.0.0.1';
const port = 8080;

function serveFile(path, res) {
  fs.readFile(path, (err, data) => {
    if (err) console.log(err);
    
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.end(data);
  })
}

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") serveFile("./index.html", res);
  else if (url === "/about") serveFile("./about.html", res);
  else if (url === "/contact-me") serveFile("./contact-me.html", res);
  else serveFile("./404.html", res);

})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})