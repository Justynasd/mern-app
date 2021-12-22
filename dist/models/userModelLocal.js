"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const passport_local_mongoose_1 = __importDefault(require("passport-local-mongoose"));
const userSchemaLocal = new mongoose_1.Schema({});
userSchemaLocal.plugin(passport_local_mongoose_1.default);
const UserModelLocal = (0, mongoose_1.model)('UserModelLocal', userSchemaLocal);
exports.default = UserModelLocal;
//# sourceMappingURL=userModelLocal.js.map