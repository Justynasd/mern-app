import { Router } from 'express';
import passport from 'passport';

const router = Router();

// Github auth
router.get('/github', passport.authenticate('github'));

export default router;