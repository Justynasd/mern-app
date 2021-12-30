import { Router } from 'express';
import { UserDef } from '../interfaces/userInterface';
import { getEventsByUsername } from '../controllers/eventController';

const router = Router();

router.get('/', getEventsByUsername);

export default router;