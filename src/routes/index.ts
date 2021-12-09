import { Router } from 'express';

const router = Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.json({"msg": (typeof req.user === "undefined") ? "Please LogIn first!" :  "Hello there " + req.user.displayName})
});

export default router;
