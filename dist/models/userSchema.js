"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    id: { required: true },
    displayName: {},
    username: { required: true },
    emails: {},
    photos: {},
});
const UserModel = (0, mongoose_1.model)('User', userSchema);
exports.default = UserModel;
//# sourceMappingURL=userSchema.js.map