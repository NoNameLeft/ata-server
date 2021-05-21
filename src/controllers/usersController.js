import express from 'express';
import * as config from '../config/config';

import { login, register, getAll } from '../services/usersService';

const router = express.Router();

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        let token = await login({ username, password });
        
        res.cookie(config.default.cookie_name, token);
        res.json({ message: 'You have successfully logged in.' });
    } catch (error) {
        res.json({ error: "Invalid username or password" });
    }
});

router.post('/register', async (req, res) => {
    const { username, email, password, rePassword } = req.body;

    if (password != rePassword) {
        return res.json({ error: "Passwords do not match!" })
    }

    try {
        await register({ username, email, password });
        
        res.json({ message: 'You have successfully registered.' });
    } catch (error) {
        res.json({ error: error.message });
    }
});

router.get('/logout', (req, res) => {
    res.clearCookie(config.default.cookie_name);
});

router.get('/all', async (req, res) => {
    try {
        let users = await getAll();
        
        res.send(JSON.stringify(users, null, 2));
    } catch (error) {
        res.json({ error: error.message });
    }
});

export default router;