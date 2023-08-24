const User = require('../models/User');

const users = [];

class UserController {
  getAllUsers(req, res) {
    res.json(users);
  }

  createUser(req, res) {
    const { name, email } = req.body;
    const id = users.length + 1;
    const newUser = new User(id, name, email);
    users.push(newUser);
    res.status(201).json(newUser);
  }

  updateUser(req, res) {
    const { id } = req.params;
    const { name, email } = req.body;
    const user = users.find(user => user.id === parseInt(id));
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.name = name;
    user.email = email;
    res.json(user);
  }

  deleteUser(req, res) {
    const { id } = req.params;
    const index = users.findIndex(user => user.id === parseInt(id));
    if (index === -1) {
      return res.status(404).json({ message: 'User not found' });
    }
    const deletedUser = users.splice(index, 1)[0];
    res.json(deletedUser);
  }
}

module.exports = new UserController();
