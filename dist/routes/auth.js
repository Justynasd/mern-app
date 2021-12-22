"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const router = (0, express_1.Router)();
// GET authorization from github, this path is setted up in github (https://github.com/settings/applications)
router.get('/github/callback', passport_1.default.authenticate('github', { failureRedirect: '/loginFailed', successRedirect: '/' }));
exports.default = router;
//# sourceMappingURL=auth.js.map