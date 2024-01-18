const express = require('express')
const {validateBody, authenticate, upload} = require('../../middlewares');
const {schemas} = require('../../models/user.js');
const {register, login, getCurrent, logout, updateSubscription, updateAvatar} = require('../../controllers/auth');

const router = express.Router();

router.post('/register', validateBody(schemas.registerSchema), register);
router.post('/login', validateBody(schemas.loginSchema), login);
router.get('/current', authenticate, getCurrent);
router.post('/logout', authenticate, logout);
router.patch('/avatars', authenticate, upload.single("avatar"), updateAvatar);
router.patch('/:userId', authenticate, validateBody(schemas.subscriptionSchema), updateSubscription);

module.exports = router;