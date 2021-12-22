"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = __importDefault(require("../models/userModel"));
async function findUserByUsername(username) {
    const query = { username: username };
    const select = 'username email';
    const user = await userModel_1.default.findOne(query, select);
    console.log(`findUsername: `, user);
    return user;
}
exports.default = findUserByUsername;
//# sourceMappingURL=findUser.js.map