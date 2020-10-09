const express = require('express');
const router = express.Router();
const userService = require('../service/UserService');

/* Create a new user entity. */
router.get('/test', async (req, res, next) => {
        const result = await userService.createUser("test", "password");
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(result));
    }
);

module.exports = router;
