"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const eventSchema = new mongoose_1.Schema({
    username: { required: true },
    title: { required: true },
    description: { required: true },
    eventDate: { required: true, default: new Date(Date.now() + (3600 * 1000 * 24)) },
    isDone: { required: true, default: false }
});
const Events = (0, mongoose_1.model)('Events', eventSchema);
exports.default = Events;
//# sourceMappingURL=eventModel.js.map