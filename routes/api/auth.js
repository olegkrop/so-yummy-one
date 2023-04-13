const express = require('express');
const { schemas } = require("../../models/user");
const router = express.Router();
const ctrl = require('../../controllers/auth')
const { authorization, upload } = require('../../middlewares')


router.post('/register', schemas.registerVal, ctrl.register)
router.post('/login', schemas.loginVal, ctrl.login)
router.get('/current', authorization, ctrl.getCurrent);
router.post('/logout', authorization, ctrl.logout)
router.patch('/avatars', authorization, upload.single('avatar'), ctrl.updateAvatars);
module.exports = router;