const express = require('express');
const { schemas } = require("../../models/user");
const router = express.Router();
const ctrl = require('../../controllers/auth')
const authorization = require('../../middlewares/authorization')


router.post('/register', schemas.registerVal, ctrl.register)
router.post('/login', schemas.loginVal, ctrl.login)
router.get('/current', authorization, ctrl.getCurrent);
router.post('/logout', authorization, ctrl.logout)
module.exports = router;