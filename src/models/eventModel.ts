import mongoose from '../config/db';
import IEvent from '../interfaces/eventInterface';

const eventSchema: mongoose.Schema<IEvent> = new mongoose.Schema<IEvent>({
    username: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    eventDate: { type: Date, required: true, default: new Date(Date.now() + ( 3600 * 1000 * 24))},
    isDone: { type: Boolean, required: true, default: false}
},
{
    timestamps: true,
},
)

eventSchema.index({ "username": 1, "title": 1}, { "unique": true });

const Event: mongoose.Model<IEvent> = mongoose.model('Event', eventSchema);

export default Event