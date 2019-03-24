const AuthController = require('../../controllers/AuthController')
const router = require('express').Router();

router.post('/register', (req,res, next) => {
  AuthController.register(req,res, next)
});

router.post('/login', (req,res, next) => {
  AuthController.login(req,res,next);
});

router.get('/logout', (req,res, next) => {
  AuthController.logout(req,res, next)
});

module.exports = router;