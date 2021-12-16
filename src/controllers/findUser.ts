import User from "../interfaces/userInterface";
import UserModel from "../models/userModel";

function findUser(id: User["id"]): any {
    const query = { id: id };
    const select = 'id displayName username emails photos'
    const user = UserModel.findOne(query, select);
    console.log(`findUser: `, user);
    return user;
}

export default findUser