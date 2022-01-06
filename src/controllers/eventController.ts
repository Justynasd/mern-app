import Event from "../models/eventModel";
import { EventDef } from "../interfaces/eventInterface";
import { Request, Response, NextFunction } from "express";
import { UserDef } from "../interfaces/userInterface";

async function getEventsByUsername(req: Request, res: Response, next: NextFunction) {
    if (!req.user) {
        res.render('index', { events: null, user: null });
    } else {
    try {
        const reqUser: UserDef = req.user;
        const query = { username: reqUser.username };
        const select = 'username title description eventDate isDone'
        Event.find(query, select, (err: any, events: any) => {
            res.render('index', { events: events, user: reqUser });
        })
    } catch (err) {
        next(err);
    }
    }
}

async function createEvent(req: Request, res: Response, next: NextFunction) {
    try {
        const event: EventDef = { username: req.body.username, title: req.body.title, description: req.body.description, eventDate: req.body.eventDate }
        const user: UserDef = {username: req.body.username}
        Event.create(event, (err, result) => {
            if (err) {
                // res.json()
                res.render('event', { user: user, event: event, message: err });
            } else {
                res.redirect('/')
            }
        });
    } catch (err) {
        next(err);
    }
}

async function deleteEvent(req: Request, res: Response, next: NextFunction) {
    try {
        console.log(req.body)
        console.log('deleteEvent: ',req.body.username, '-', req.body.title)
        Event.deleteOne({ username: req.body.username, title: req.body.title }, (err: any, result: any) => {
            // if (result.deletedCount == 1) 
            res.redirect('/')
        })
    } catch (err) {
        next(err);
    }
}

export { createEvent, getEventsByUsername, deleteEvent }
