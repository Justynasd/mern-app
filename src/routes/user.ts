import { Router } from 'express';
import createUser from "../controllers/createUser";
import { UserDef } from "../interfaces/userInterface";

const router = Router();

router.get('/new', function(req, res, next) {
    res.render('signup');
  });

router.post('/', async (req, res) => {
    const userInput: UserDef = { email: req.body.email, username: req.body.username, password: req.body.password}
    const user = await createUser(userInput);
    req.login(user, function (err) {
        if (err) {
            console.log(err);
        }
        console.log(`Saved User: `, user.username);
        return res.redirect('/');
    });
});

export default router;