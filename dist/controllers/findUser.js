"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = __importDefault(require("../models/userModel"));
function findUser(id) {
    const query = { id: id };
    const select = 'id displayName username emails photos';
    const user = userModel_1.default.findOne(query, select);
    console.log(`findUser: `, user);
    return user;
}
exports.default = findUser;
//# sourceMappingURL=findUser.js.map