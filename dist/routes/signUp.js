"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createUser_1 = __importDefault(require("../controllers/createUser"));
const router = (0, express_1.Router)();
router.post('/', async (req, res) => {
    const userInput = { email: req.body.email, username: req.body.username, password: req.body.password };
    const user = await (0, createUser_1.default)(userInput);
    req.login(user, function (err) {
        if (err) {
            console.log(err);
        }
        console.log(`Saved User: `, user.username);
        return res.redirect('/');
    });
});
exports.default = router;
//# sourceMappingURL=signup.js.map