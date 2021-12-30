"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.findUserByUsername = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
async function findUserByUsername(username) {
    const query = { username: username };
    const select = 'username email';
    const user = await userModel_1.default.findOne(query, select);
    return user;
}
exports.findUserByUsername = findUserByUsername;
async function createUser(user) {
    const { username, password, email } = user;
    const doc = new userModel_1.default({ username, password, email });
    return await doc.save();
}
exports.createUser = createUser;
//# sourceMappingURL=userConroller%20copy.js.map