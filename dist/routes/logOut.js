"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Logout route
router.get('/', function (req, res) {
    req.logout();
    res.redirect('/');
});
exports.default = router;
//# sourceMappingURL=logout.js.map