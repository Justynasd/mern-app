import { Router } from 'express';
import { ensureLoggedIn } from 'connect-ensure-login';
import findUserByUsername from '../controllers/findUser';
import { UserDef } from '../interfaces/userInterface';

var router = Router();

// GET users accout.
router.get('/',
    ensureLoggedIn(),
    async (req, res) => {
        const user: UserDef = await findUserByUsername(req.body.username);
        res.render('profile', { user: user });
    });

export default router;