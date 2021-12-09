import { Router } from 'express';

const router = Router();

// GET login failed route.
router.get('/', (req, res, next) => {
  res.json({"msg": "something went wrong"});
});

export default router;
