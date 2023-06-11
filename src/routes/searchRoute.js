const routes = require('./routes');

const searchRoute = (url, method) => {
  let { pathname } = url;
  let id = null;

  const splitEndpoint = pathname.split('/').filter(Boolean);

  if (splitEndpoint.length > 1) {
    pathname = `/${splitEndpoint[0]}/:id`
    id = splitEndpoint[1];
  }
  
  const foundRoute = routes.find(route =>
    route.endpoint === pathname && route.method === method
  );

  if (foundRoute) return { id, ...foundRoute };
  else return false;
}

module.exports = searchRoute;