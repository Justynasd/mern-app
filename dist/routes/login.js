"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const eventController_1 = require("../controllers/eventController");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.render('login');
});
// passport Local auth
router.post('/password', passport_1.default.authenticate('local'), eventController_1.getEventsByUsername);
exports.default = router;
//# sourceMappingURL=login.js.map