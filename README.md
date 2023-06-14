# 🌱 Pure Node Server

<p align="center">
  Uma aplicação simples para demonstrar como construir uma API 
  utilizando apenas o Node.js sem frameworks. 📦
</p>

### 📝 Pré-requisitos 

Antes de começar, você vai precisar ter instalado em sua máquina as 
seguintes ferramentas: 

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/) e
- [Insomnia](https://insomnia.rest/download) ou o 
[Postman](https://www.postman.com/downloads/) para testar a aplicação.

### 🎲 Rodando a API

1. baixe o projeto:

```bash
git clone git@github.com:ananuness/pure-node-server.git
```

2. após baixar a aplicação, rode os comandos:

```bash
cd pure-node-server  # indo para a pasta do projeto
npm run dev          # rodando o projeto no localhost 
```

### 🔗 Endpoints

- **GET `/users`:** retorna todos usuários (dados encontrados na pasta mocks, 
não há uso de um banco de dados);
  - aceita query param *order* que ordena por id, como:

  ```
    /users?order=asc
  ```

  - retorno:
  ```js
    // HTTP status code: 200
    [
      {
        "id": 1,
        "name": 'Ana'
      },
      {
        "id": 2,
        "name": 'Vivian'
      }
    ]
  ```

- **GET `/users/:id`:** retorna usuário por id;
  - possíveis retornos:

  ```js
  // HTTP status code 200
  {
    "id": 2,
    "name": "Vivian"
  }
  
  // HTTP status code 404
  {
    "error": "User not found"
  }
  ```

- **POST `/users`:** cria um novo usuário;
  - body da requisição:

  ```js
  {
    "name": "Bruno"
  }
  ```
  - retorno:
  ```js
  // HTTP status code 201
  {
    "id": 5
    "name": "Bruno"
  }
  ```

- **PUT `/users/:id`:** atualiza o usuário com o id informado;
  - body da requisição:

  ```js
  {
    "name": "Bruno Oliveira"
  }
  ```
  - possíveis retornos:
  ```js
  // HTTP status code 204 (No content)
  
  // HTTP status code 404
  {
    "error": "User not found"
  }
  ```

- **DELETE `/users/:id`:** deleta o usuário com o id informado;
  - possíveis retornos:
  ```js
  // HTTP status code 200
  { 
    deleted: true 
  }
  
  // HTTP status code 404
  {
    "error": "User not found"
  }
  ```

<hr>

<p align="center">
  Feito com 💚 por
  <a align="center" href="https://www.linkedin.com/in/ana-beatriz-nunes/">
    Ana Beatriz Nunes
  </a>
</p>