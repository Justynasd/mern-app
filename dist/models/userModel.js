"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../config/db"));
const crypto_1 = require("crypto");
// import { cryptConfig } from '../config/config'
const validator_1 = __importDefault(require("validator"));
const dotenv_1 = __importDefault(require("dotenv"));
// invoke dotenv
dotenv_1.default.config();
const userSchema = new db_1.default.Schema({
    email: {
        type: String,
        require: [true, 'Enter an email address.'],
        unique: true,
        lowercase: true,
        validate: [validator_1.default.isEmail, 'Enter a valid email address.']
    },
    username: {
        type: String,
        required: [true, 'Enter a username.'],
        unique: true,
        lowercase: true,
        validate: [validator_1.default.isAlphanumeric, 'Usernames may only have letters and numbers.']
    },
    password: {
        type: String,
        required: [true, 'Enter a password.'],
        minLength: [4, 'Password should be at least four characters']
    },
    salt: {
        type: String
    }
}, {
    timestamps: true,
});
// Document middlewares for auto hashing pwd 
userSchema.pre("save", function (next) {
    if (this.isModified("password")) {
        this.salt = (0, crypto_1.randomBytes)(parseInt(process.env.CRYPTO_SALT)).toString('hex');
        (0, crypto_1.pbkdf2)(this.password, this.salt, parseInt(process.env.CRYPTO_ITERATIONS), parseInt(process.env.CRYPTO_KEYLEN), process.env.CRYPTO_DIGEST, (err, encryptedPwd) => {
            if (err)
                throw err;
            this.password = encryptedPwd.toString('hex');
            next();
        });
    }
});
const User = db_1.default.model('User', userSchema);
exports.default = User;
//# sourceMappingURL=userModel.js.map