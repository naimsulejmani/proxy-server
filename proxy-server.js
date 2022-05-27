const Fastify = require('fastify');
const server = Fastify();

const proxy = require('@fastify/http-proxy');

server.register(proxy, {
    upstream: 'http://localhost:9090/',
    prefix: '',
    http2: false
});

server.listen(3000).then(r => console.log('server has been started!', r));