import { Schema, model } from 'mongoose';
import UserI from '../interfaces/userInterface';

const userSchemaGit = new Schema<UserI>({
    username: String,//{ required: true },
    // id: String,//{ required: true },
    // displayName: String,//{},
    // emails: String,//{}, 
    // photos: String
},
    { timestamps: true },
)

const UserModelGit = model<UserI>('User', userSchemaGit);

export default UserModelGit