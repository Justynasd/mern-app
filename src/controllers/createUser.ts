import User from '../models/userModel'
import { UserDef } from '../interfaces/userInterface';

async function createUser(user: UserDef): Promise<UserDef> {
    const {username, password, email} = user;
    const doc = new User({username, password, email});
    return await doc.save();
  }

export default createUser