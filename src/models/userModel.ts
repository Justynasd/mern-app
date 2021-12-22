import mongoose from '../config/db';
import { IUser } from '../interfaces/userInterface';
import { randomBytes, pbkdf2 } from 'crypto';
import { cryptConfig } from '../config/config'

// const profile: ProfileI = {}

const userSchema: mongoose.Schema = new mongoose.Schema<IUser>({
    // _id: Schema.Types.ObjectId,
    email: { type: String, required: false },//, required: true, unique: true },
    username: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    salt: { type: String, required: false },
    // profiles: {},
},
    {
        timestamps: true,
    },
);

// userSchema.index({ profiles. : 1, user: 1 }, { unique: true })

// Document middlewares for auto hashing pwd 
userSchema.pre<IUser>("save", function (next) {
    if (this.isModified("password")) {
        this.salt = randomBytes(16).toString('hex');
        pbkdf2(this.password, this.salt, cryptConfig.iterations , cryptConfig.keylen, cryptConfig.digest, (err, derivedKey) => {
            if (err) throw err;
            this.password = derivedKey.toString('hex');
            console.log(`derivedKey: `, this.password); 
            next();
          });
    }
});

const User: mongoose.Model<IUser> = mongoose.model<IUser>('User', userSchema);

export default User