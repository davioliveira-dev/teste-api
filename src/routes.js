const { Router } = require('express');
const { UserController } = require('./controllers/UserController');

const userController = new UserController();

const routes = Router();

routes.get('/users', (req, res) => userController.index(req, res));
routes.post('/users', (req, res) => userController.store(req, res));
routes.get('/users/:id', (req, res) => userController.show(req, res));
routes.put('/users/:login', (req, res) => userController.update(req, res));
routes.delete('/users/:login', (req, res) => userController.delete(req, res));

module.exports = { routes };
