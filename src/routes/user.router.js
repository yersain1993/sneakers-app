const express = require('express');
// const { getAll, create, getOne, update, remove } = require('../controllers/user.controller');
const { create, getAll, getOne, update, remove } = require('../controllers/user.controller');

const userRouter = express.Router();

userRouter.route('/price/:userId/:productName')
    .get(getOne)

module.exports = userRouter;