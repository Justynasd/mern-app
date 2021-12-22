import { Router } from 'express';
import passport from 'passport';

const router = Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('login');
});

// Local auth
router.post('/password', 
  passport.authenticate('local'), //, { failureRedirect: '/loginFailed' }s
  function(req, res) {
    res.redirect('/');
  });

// Github auth
router.get('/github', passport.authenticate('github'));

export default router;