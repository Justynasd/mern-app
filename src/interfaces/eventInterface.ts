import { Document } from 'mongoose'

interface IEvent extends Document {
    username: string;
    title: string;
    description: string;
    eventDate: Date;
    isDone: boolean;
}

interface EventDef {
    username?: string;
    title?: string;
    description?: string;
    eventDate?: Date;
    isDone?: boolean;
}

export { EventDef }

export default IEvent