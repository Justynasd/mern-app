"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const connect_ensure_login_1 = require("connect-ensure-login");
const userConroller_1 = require("../controllers/userConroller");
var router = (0, express_1.Router)();
// GET users accout
router.get('/', (0, connect_ensure_login_1.ensureLoggedIn)(), async (req, res) => {
    let user = req.user;
    user = await (0, userConroller_1.findUserByUsername)(user.username);
    res.render('profile', { user: user });
});
exports.default = router;
//# sourceMappingURL=myaccount%20copy.js.map