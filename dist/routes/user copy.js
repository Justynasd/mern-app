"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userConroller_1 = require("../controllers/userConroller");
const router = (0, express_1.Router)();
router.get('/new', (req, res) => {
    res.render('signup');
});
router.post('/', async (req, res) => {
    const userInput = { email: req.body.email, username: req.body.username, password: req.body.password };
    const user = await (0, userConroller_1.createUser)(userInput);
    req.login(user, (err) => {
        if (err) {
            console.log(err);
        }
        return res.redirect('/');
    });
});
exports.default = router;
//# sourceMappingURL=user%20copy.js.map