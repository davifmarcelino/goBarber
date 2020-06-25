import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

<<<<<<< HEAD
import authMiddleware from './app/middlewares/auth'

const routes = new Router()
=======
const routes = new Router();
>>>>>>> bcadb961c60505bae4d868de1506faf378fa7cc5

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

<<<<<<< HEAD
routes.use(authMiddleware)

routes.put('/users',UserController.update)

export default routes
=======
export default routes;
>>>>>>> bcadb961c60505bae4d868de1506faf378fa7cc5
