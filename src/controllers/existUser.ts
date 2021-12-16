import UserModel from "../models/userModel";
import User from "../interfaces/userInterface";

function existUser(id: User["id"]): any {
    UserModel.exists({ id: id }, (error, result) => {
        if (error) {
            console.log(error)
        }
        console.log(`existUser`, result);
        return result
    });
}

export default existUser