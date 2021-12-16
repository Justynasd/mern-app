import { Schema, model } from 'mongoose';
import User from '../interfaces/userInterface'

const userSchema = new Schema<User>({
    id: String,//{ required: true },
    displayName: String,//{},
    username: String,//{ required: true },
    emails: String,
    photos: String
},
    { timestamps: true },
)

const UserModel = model<User>('User', userSchema);

export default UserModel