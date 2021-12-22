import { Router } from 'express';
import passport from 'passport';
import User from '../interfaces/userInterface';

const router = Router();

// GET authorization from github, this path is setted up in github (https://github.com/settings/applications)
router.get('/github/callback',
  passport.authenticate('github', { failureRedirect: '/loginFailed', successRedirect: '/'})
);

export default router;
