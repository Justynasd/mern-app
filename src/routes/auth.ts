import { Router } from 'express';
import passport from 'passport';
import upserUser from '../controllers/upserUser';
import User from '../interfaces/userInterface';

const router = Router();

// GET authorization from github, this path is setted up in github (https://github.com/settings/applications)
router.get('/github/callback',
  passport.authenticate('github', { failureRedirect: '/loginFailed', successRedirect: '/'})
  // async (req, res) => {
  //   const user: User = req.user;
  //   const { emails, photos } = user;
  //   const email = Object.values(emails[0])[0];
  //   const photo = Object.values(photos[0])[0];
  //   // console.log(`CB from AUTH full USER: `, values)
  //   upserUser({
  //     id: user.id,
  //     displayName: user.displayName,
  //     username: user.username,
  //     emails: email,
  //     photos: photo
  //   });
    // res.redirect('/');
  // }
);

export default router;
