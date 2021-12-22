import { Router } from 'express';

const router = Router();

// Logout route
router.get('/', function(req, res) {
    req.logout();
    res.redirect('/');
  });

export default router;