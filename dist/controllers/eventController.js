"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEvent = exports.getEventsByUsername = exports.createEvent = void 0;
const eventModel_1 = __importDefault(require("../models/eventModel"));
async function getEventsByUsername(req, res, next) {
    if (!req.user) {
        res.render('index', { events: null, user: null });
    }
    else {
        try {
            const reqUser = req.user;
            const query = { username: reqUser.username };
            const select = 'username title description eventDate isDone';
            eventModel_1.default.find(query, select, (err, events) => {
                res.render('index', { events: events, user: reqUser });
            });
        }
        catch (err) {
            next(err);
        }
    }
}
exports.getEventsByUsername = getEventsByUsername;
async function createEvent(req, res, next) {
    try {
        const event = { username: req.body.username, title: req.body.title, description: req.body.description, eventDate: req.body.eventDate };
        const user = { username: req.body.username };
        eventModel_1.default.create(event, (err, result) => {
            if (err) {
                // res.json()
                res.render('event', { user: user, event: event, message: err });
            }
            else {
                res.redirect('/');
            }
        });
    }
    catch (err) {
        next(err);
    }
}
exports.createEvent = createEvent;
async function deleteEvent(req, res, next) {
    try {
        console.log(req.body);
        console.log('deleteEvent: ', req.body.username, '-', req.body.title);
        eventModel_1.default.deleteOne({ username: req.body.username, title: req.body.title }, (err, result) => {
            // if (result.deletedCount == 1) 
            res.redirect('/');
        });
    }
    catch (err) {
        next(err);
    }
}
exports.deleteEvent = deleteEvent;
//# sourceMappingURL=eventController.js.map