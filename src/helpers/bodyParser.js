const bodyParser = (request, callback) => {
  let body = '';

  // as mensagens do body de uma requisicao sao mandadas por
  // streams, ou seja, elas vao chegando aos poucos, entao
  // e necessario criar um event listener que fica ouvindo
  // toda vez que essas mensagens vao chegando, vai concatenando
  // essas strings e por fim faz um parse para objeto javascript

  // event listener para quando chegar novas informacoes
  request.on('data', chunk => body += chunk);

  // event listener para quando as informacoes chegarem ao fim
  request.on('end', () => {
    body = JSON.parse(body);
    request.body = body;
    
    callback();
  });
}

module.exports = bodyParser;