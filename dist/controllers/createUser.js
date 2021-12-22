"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = __importDefault(require("../models/userModel"));
async function createUser(user) {
    const { username, password, email } = user;
    const doc = new userModel_1.default({ username, password, email });
    return await doc.save();
}
exports.default = createUser;
//# sourceMappingURL=createUser.js.map