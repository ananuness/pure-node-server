const http = require('http');
const { URL } = require('url');
const searchRoute = require('./routes/searchRoute');
const bodyParser = require('./helpers/bodyParser');

const server = http.createServer((request, response) => {
  response.message = (statusCode, body='') => {
    response.writeHead(statusCode, { 'Content-Type': 'application/json'});
    response.end(JSON.stringify(body));
  }

  const parsedUrl = new URL(`http://localhost:3000${request.url}`);
  const route = searchRoute(parsedUrl, request.method);

  if (route) {
    request.params = { id: route.id };
    request.query = Object.fromEntries(parsedUrl.searchParams);

    if (['POST', 'PUT', 'PATCH'].includes(request.method)) {
      bodyParser(request, () => 
        route.handler(request, response)
      );
    }
    else {
      route.handler(request, response);
    }
  }
  else {
    response.message(
      404, `Cannot ${request.method} ${parsedUrl.pathname}`
    );
  }
});

server.listen(3000, () => 
  console.log('🚀 Server started at http://localhost:3000')
);