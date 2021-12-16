import User from '../interfaces/userInterface'
import UserModel from '../models/userModel'
import mongoose from '../config/db';

async function createUser(user: User): Promise<User> {
    const userModel = new UserModel(user);
      return await userModel.save();
}

export default createUser