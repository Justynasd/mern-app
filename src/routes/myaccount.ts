import { Router } from 'express';
import { ensureLoggedIn } from 'connect-ensure-login';
import { findUserByUsername } from '../controllers/userConroller';

var router = Router();

// GET users accout
router.get('/',
    ensureLoggedIn(),
    findUserByUsername);

export default router;