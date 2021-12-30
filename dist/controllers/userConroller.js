"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEmail = exports.createUser = exports.findUserByUsername = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const eventController_1 = require("./eventController");
async function findUserByUsername(req, res, next) {
    try {
        const reqUser = req.user;
        const query = { username: reqUser.username };
        const select = 'username email';
        userModel_1.default.findOne(query, select, (err, user) => {
            // console.log('findUserByUsername ', { user: user })
            if (err)
                next(err);
            // if (user) next('User not found')
            res.render('profile', { user: user, message: null });
        });
    }
    catch (err) {
        next(err);
    }
}
exports.findUserByUsername = findUserByUsername;
async function createUser(req, res, next) {
    try {
        const user = await userModel_1.default.create({ email: req.body.email, username: req.body.username, password: req.body.password });
        await eventController_1.getEventsByUsername;
        // const events = await getEventsByUsername(req.body.username);
        // res.render('index', { events: events, user: user });
    }
    catch (err) {
        next(err);
    }
}
exports.createUser = createUser;
async function updateEmail(req, res, next) {
    try {
        userModel_1.default.updateOne({ username: req.body.username }, { email: req.body.email }, (err, result) => {
            let user = { email: req.body.email, username: req.body.username };
            if (err) {
                res.render('profile', { user: user, message: err });
            }
            else if (result.modifiedCount = 1) {
                // console.log('updateEmail ', { user: user })
                res.render('profile', { user: user, message: null });
            }
            else {
                findUserByUsername;
            }
        });
    }
    catch (err) {
        next(err);
    }
}
exports.updateEmail = updateEmail;
//# sourceMappingURL=userConroller.js.map