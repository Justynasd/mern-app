"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userConroller_1 = require("../controllers/userConroller");
const router = (0, express_1.Router)();
router.get('/new', (req, res) => {
    res.render('signup');
});
router.post('/', userConroller_1.createUser);
router.post('/upd', userConroller_1.updateEmail);
exports.default = router;
//# sourceMappingURL=user.js.map