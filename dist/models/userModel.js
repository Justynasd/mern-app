"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../config/db"));
const crypto_1 = require("crypto");
const config_1 = require("../config/config");
// const profile: ProfileI = {}
const userSchema = new db_1.default.Schema({
    // _id: Schema.Types.ObjectId,
    email: { type: String, required: false },
    username: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    salt: { type: String, required: false },
    // profiles: {},
}, {
    timestamps: true,
});
// userSchema.index({ profiles. : 1, user: 1 }, { unique: true })
// Document middlewares for auto hashing pwd 
userSchema.pre("save", function (next) {
    if (this.isModified("password")) {
        this.salt = (0, crypto_1.randomBytes)(16).toString('hex');
        (0, crypto_1.pbkdf2)(this.password, this.salt, config_1.cryptConfig.iterations, config_1.cryptConfig.keylen, config_1.cryptConfig.digest, (err, derivedKey) => {
            if (err)
                throw err;
            this.password = derivedKey.toString('hex');
            console.log(`derivedKey: `, this.password);
            next();
        });
    }
});
const User = db_1.default.model('User', userSchema);
exports.default = User;
//# sourceMappingURL=userModel.js.map