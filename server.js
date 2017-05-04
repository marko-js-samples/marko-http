require('marko/node-require').install();

const http = require('http');
const server = require('http').createServer();

const port = 8080;
const indexTemplate = require('./index.marko');

server.on('request', (req, res) => {
  indexTemplate.render({
    name: 'Frank',
    count: 30,
    colors: ['red', 'green', 'blue']
  }, res);
});

server.listen(port, () => {
  console.log(`Successfully started server on port ${port}`);
});
