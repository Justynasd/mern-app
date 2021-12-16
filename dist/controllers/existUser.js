"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = __importDefault(require("../models/userModel"));
function existUser(id) {
    userModel_1.default.exists({ id: id }, (error, result) => {
        if (error) {
            console.log(error);
        }
        console.log(`existUser`, result);
        return result;
    });
}
exports.default = existUser;
//# sourceMappingURL=existUser.js.map