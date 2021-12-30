"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const connect_ensure_login_1 = require("connect-ensure-login");
const userConroller_1 = require("../controllers/userConroller");
var router = (0, express_1.Router)();
// GET users accout
router.get('/', (0, connect_ensure_login_1.ensureLoggedIn)(), userConroller_1.findUserByUsername);
exports.default = router;
//# sourceMappingURL=myaccount.js.map