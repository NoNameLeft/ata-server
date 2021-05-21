import express from 'express';

import home from './controllers/homeController';
import users from './controllers/usersController';

const router = express.Router();

router.use('/', home);
router.use('/users', users);

export default router;