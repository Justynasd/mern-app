import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  req.logout();
  res.redirect('/');
});

export default router;