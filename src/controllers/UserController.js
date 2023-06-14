let users = require('../mocks/users');

const UserController = {
  listUsers(request, response) {
    const { order } = request.query;

    const sortedUsers = users.sort((a, b) =>
      order === 'desc' ? b.id - a.id : a.id - b.id
    );

    return response.message(200, sortedUsers);
  },

  getUserById(request, response) {
    const { id } = request.params;

    const foundUser = users.find(user => user.id === Number(id));

    if (!foundUser) {
      return response.message(404, { error: 'User not found' });
    }
    
    return response.message(200, foundUser);
  },

  createUser(request, response) {
    const { name } = request.body;
    const lastId = users[users.length - 1].id;

    const newUser = { id: lastId + 1, name };

    users.push(newUser);

    return response.message(201, newUser);
  },

  updateUser(request, response) {
    const id = Number(request.params.id);
    const { name } = request.body;

    const userExists = users.find(user => user.id === id);

    if (!userExists) {
      return response.message(404, { error: 'User not found' });
    }

    users = users.map(user => 
      user.id === id ? { ...user, name } : user
    );

    return response.message(204);
  },

  deleteUser(request, response) {
    const id = Number(request.params.id);

    const userExists = users.find(user => user.id === id);

    if (!userExists) {
      return response.message(404, { error: 'User not found' });
    }

    users = users.filter(user => user.id !== id);

    return response.message(200, { deleted: true });
  }
}

module.exports = UserController;