import { Router } from 'express';
import passport from 'passport';

const router = Router();

/* GET authorization */
router.get('/', passport.authenticate('github', {
  successRedirect: '/',
  failureRedirect: '/loginFailed'
}));

export default router;
