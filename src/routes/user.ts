import { Router } from 'express';
import { createUser, updateEmail } from "../controllers/userConroller";

const router = Router();

router.get('/new', (req, res) => {
    res.render('signup');
});

router.post('/', createUser);

router.post('/upd', updateEmail);

export default router;