// importing the necessary modules
const router = require('express').Router();
const userController = require('../controller/userController')

router.post('/signup', userController.signup);
router.post('/login', userController.checkPassword);
router.get('/list', userController.listUsers)


module.exports = router;