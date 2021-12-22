"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createUser_1 = __importDefault(require("../controllers/createUser"));
const router = (0, express_1.Router)();
router.post('/', (req, res) => {
    const userInput = { email: req.body.email, username: req.body.username, password: req.body.password };
    // save in Mongo
    const user = (0, createUser_1.default)(userInput);
    console.log(`Saved User: `, user);
    // const user = {
    //     id: this.lastID.toString(),
    //     username: req.body.username,
    //     displayName: req.body.name
    //   };
    req.login(user, function (err) {
        if (err) {
            console.log(err);
        }
        return res.redirect('/');
    });
});
module.exports = router;
//# sourceMappingURL=signin.js.map