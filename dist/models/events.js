"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const eventSchema = new Schema({
    username: String,
    title: String,
    description: String,
    eventDate: Date,
    isDone: Boolean,
});
const Events = mongoose_1.default.model('Events', eventSchema);
exports.default = Events;
//# sourceMappingURL=events.js.map