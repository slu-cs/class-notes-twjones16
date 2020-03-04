// Hello world web server
const express = require('express');

// Create the server
const app = express();

// Respond to one request
// http://cs-linuxlab-35.stlawu.local:3000/
app.get('/', function(request, response) {
  response.send('Hello Tim');
});

//cs-linuxlab-35.stlawu.local:3000/foo
app.get('/foo', function(request, response) {
  response.send('Hello Tim you are chill. Also foo');
});

//cs-linuxlab-35.stlawu.local:3000/foo/bar
app.get('/foo/bar', function(request, response) {
  response.send('Hello Tim you are chill. Also bar');
});

//cs-linuxlab-35.stlawu.local:3000/zap/:z
app.get('/zap/:z', function(request, response) {
  response.send(`Hello ${request.params.z}`);
});

//cs-linuxlab-35.stlawu.local:3000/zap/zap?x=X&y=Y
app.get('/zap', function(request, response) {
  response.send(`Hello zap with ${request.params.x} and ${request.query.y}`);
});



// Start the server
app.listen(3000);
console.log('Server is ready.');
