"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const connect_ensure_login_1 = require("connect-ensure-login");
const findUser_1 = __importDefault(require("../controllers/findUser"));
var router = (0, express_1.Router)();
// GET users accout.
router.get('/', (0, connect_ensure_login_1.ensureLoggedIn)(), async (req, res) => {
    const user = await (0, findUser_1.default)(req.body.username);
    res.render('profile', { user: user });
});
exports.default = router;
//# sourceMappingURL=myaccount.js.map