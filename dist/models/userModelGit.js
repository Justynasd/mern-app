"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchemaGit = new mongoose_1.Schema({
    username: String, //{ required: true },
    // id: String,//{ required: true },
    // displayName: String,//{},
    // emails: String,//{}, 
    // photos: String
}, { timestamps: true });
const UserModelGit = (0, mongoose_1.model)('User', userSchemaGit);
exports.default = UserModelGit;
//# sourceMappingURL=userModelGit.js.map