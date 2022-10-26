const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');

//GET POST PUT DELETE
// http://localhost:3001/api/user/registerUser
router.post("/registerUser", UserController.registerUser);
// http://localhost:3001/api/role/listUser
router.get("/listUser/:name?", UserController.listUser);

module.exports = router;