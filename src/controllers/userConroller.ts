import { NextFunction, Request, Response } from 'express';
import { UserDef } from '../interfaces/userInterface';
import User from "../models/userModel";
import { getEventsByUsername } from './eventController';

async function findUserByUsername(req: Request, res: Response, next: NextFunction) {
    try {
        const reqUser: UserDef = req.user;
        const query = { username: reqUser.username };
        const select = 'username email'
        User.findOne(query, select, (err: any, user: any) => {
            // console.log('findUserByUsername ', { user: user })
            if (err) next(err)
            // if (user) next('User not found')
            res.render('profile', { user: user, message: null });
        });
    } catch (err) {
        next(err);
    }
}

async function createUser(req: Request, res: Response, next: NextFunction) {
    try {
        const user = await User.create({ email: req.body.email, username: req.body.username, password: req.body.password });
        await getEventsByUsername
        // const events = await getEventsByUsername(req.body.username);
        // res.render('index', { events: events, user: user });
    } catch (err) {
        next(err);
    }
}

async function updateEmail(req: Request, res: Response, next: NextFunction) {
    try {
        User.updateOne({ username: req.body.username }, { email: req.body.email }, (err: any, result: any) => {
            let user: UserDef = { email: req.body.email, username: req.body.username };
            if (err) {
                res.render('profile', { user: user, message: err});
            } else if (result.modifiedCount = 1) {
                // console.log('updateEmail ', { user: user })
                res.render('profile', { user: user, message: null });
            } else {
                findUserByUsername
            }
        })
    } catch (err) {
        next(err);
    }
}

// function isAuth(req: any, res: any, next: any) {
//     if (req.isUnAuthenticated()) return req.json(403, { message: 'Access denied, please log in' });
//     next();
// }

export { findUserByUsername, createUser, updateEmail }