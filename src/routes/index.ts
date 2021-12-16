import { Router } from 'express';
import User from '../interfaces/userInterface';

const router = Router();

/* GET home page. */
router.get('/', async (req, res) => {
  if (typeof req.user === "undefined") {
    res.json("Please LogIn first!")
  } else {
    const user: User = req.user
    res.json("Hello there " + user.displayName)
  }
});

export default router;