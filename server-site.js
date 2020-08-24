var StaticServer = require('static-server');

var server = new StaticServer({
    rootPath: './dist',              // required, the root of the server file tree
    port: 3001,                 // required, the port to listen
    name: 'my-site',            // optional, will set "X-Powered-by" HTTP header
    host: '127.0.0.1',          // optional, defaults to any interface
    cors: '*',                  // optional, defaults to undefined
    followSymlink: true,        // optional, defaults to a 404 error
    templates: {
        index: 'index.html',    // optional, defaults to 'index.html'
        notFound: '404.html'    // optional, defaults to undefined
    }
});

server.start(function () {
    console.log('Server listening to', server.port);
});


server.on('request', function (req, res) {
    console.log('req.path', req.path);
});