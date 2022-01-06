import { Router } from 'express';
import { getEventsByUsername } from '../controllers/eventController';

const router = Router();

router.get('/', getEventsByUsername);

export default router;