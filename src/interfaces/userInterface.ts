import { Document } from 'mongoose';

interface IUser extends Document {
  email: string;
  username: string;
  password: string;
  salt?: string;
}

interface UserDef {
  email?: string;
  username?: string;
  password?: string;
  salt?: string;
}

export { UserDef }

export default IUser