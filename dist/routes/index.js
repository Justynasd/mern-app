"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
/* GET home page. */
router.get('/', (req, res, next) => {
    res.json({ "msg": (typeof req.user === "undefined") ? "Please LogIn first!" : "Hello there " + req.user.displayName });
});
exports.default = router;
//# sourceMappingURL=index.js.map