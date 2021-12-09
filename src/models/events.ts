import mongoose from 'mongoose';

const { Schema } = mongoose;

const eventSchema = new Schema({
    username: String,
    title: String,
    description: String,
    eventDate: Date,
    isDone: Boolean,
});

const Events = mongoose.model('Events', eventSchema);

export default Events;