"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// GET login failed route.
router.get('/', (req, res, next) => {
    res.json({ "msg": "something went wrong" });
});
exports.default = router;
//# sourceMappingURL=loginFailed.js.map