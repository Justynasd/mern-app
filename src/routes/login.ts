import { Router } from 'express';
import passport from 'passport';
import { getEventsByUsername } from '../controllers/eventController';

const router = Router();

router.get('/', (req, res) => {
  res.render('login');
});

// passport Local auth
router.post('/password',
  passport.authenticate('local'),
  getEventsByUsername);

export default router;