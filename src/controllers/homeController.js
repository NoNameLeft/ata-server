import express from 'express'

const router = express.Router();

router.get('/', (req, res, next) => {
    res.json('SERVER IS WORKING...');
});

export default router;