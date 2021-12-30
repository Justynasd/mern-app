import mongoose from '../config/db';
import IUser from '../interfaces/userInterface';
import { randomBytes, pbkdf2 } from 'crypto';
import { cryptConfig } from '../config/config'
import validator from 'validator';


const userSchema: mongoose.Schema<IUser> = new mongoose.Schema<IUser>({
    email: {
        type: String,
        require: [true, 'Enter an email address.'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Enter a valid email address.']
    },
    username: {
        type: String,
        required: [true, 'Enter a username.'],
        unique: true,
        lowercase: true,
        validate: [validator.isAlphanumeric, 'Usernames may only have letters and numbers.']
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
userSchema.pre<IUser>("save", function (next) {
    if (this.isModified("password")) {
        this.salt = randomBytes(cryptConfig.saltlen).toString('hex');
        pbkdf2(this.password, this.salt, cryptConfig.iterations, cryptConfig.keylen, cryptConfig.digest, (err, encryptedPwd) => {
            if (err) throw err;
            this.password = encryptedPwd.toString('hex');
            next();
        });
    }
});

const User: mongoose.Model<IUser> = mongoose.model<IUser>('User', userSchema);

export default User