"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../config/db"));
const eventSchema = new db_1.default.Schema({
    username: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    eventDate: { type: Date, required: true, default: new Date(Date.now() + (3600 * 1000 * 24)) },
    isDone: { type: Boolean, required: true, default: false }
}, {
    timestamps: true,
});
eventSchema.index({ "username": 1, "title": 1 }, { "unique": true });
const Event = db_1.default.model('Event', eventSchema);
exports.default = Event;
//# sourceMappingURL=eventModel.js.map