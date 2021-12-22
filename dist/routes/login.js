"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const router = (0, express_1.Router)();
/* GET users listing. */
router.get('/', function (req, res) {
    res.render('login');
});
// Local auth
router.post('/password', passport_1.default.authenticate('local'), //, { failureRedirect: '/loginFailed' }s
function (req, res) {
    res.redirect('/');
});
// Github auth
router.get('/github', passport_1.default.authenticate('github'));
exports.default = router;
//# sourceMappingURL=login.js.map