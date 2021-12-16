import connect from '../config/db';
import User from "../interfaces/userInterface";
import userModel from '../models/userModel';

async function upserUser(user: User): Promise<any> {
    // connect to mongo
    connect;

    const query = { id: user.id };
    const update = {
        id: user.id,
        displayName: user.displayName,
        username: user.username,
        emails: user.emails,
        photos: user.photos,
    };
    let options = { upsert: true, new: true, setDefaultsOnInsert: true };
    let doc = await userModel.findOneAndUpdate(query, update, options
    //     , (err, doc) => {
    //     if (err) throw err;
    //     console.log(`User doc: `, doc);
    // }
    );
    console.log(`User doc: `, doc);
    return doc;
}

export default upserUser;