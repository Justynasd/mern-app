import { Schema, model }  from 'mongoose';
import Event from '../interfaces/eventInterface';

const eventSchema = new Schema<Event>({
    username: { required: true },
    title: { required: true },
    description: { required: true },
    eventDate: { required: true, default: new Date(Date.now() + ( 3600 * 1000 * 24))},
    isDone: { required: true, default: false}
})

const Events = model('Events', eventSchema);

export default Events