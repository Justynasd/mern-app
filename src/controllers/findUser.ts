import { UserDef } from "../interfaces/userInterface";
import User from "../models/userModel";

async function findUserByUsername(username: UserDef["username"]): Promise<UserDef> {
    const query = { username: username };
    const select = 'username email'
    const user: UserDef = await User.findOne(query, select);
    console.log(`findUsername: `, user);
    return user; 
}

export default findUserByUsername