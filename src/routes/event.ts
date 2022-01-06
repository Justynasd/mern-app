import { Router } from 'express';
import { UserDef } from '../interfaces/userInterface';
import { createEvent, deleteEvent } from '../controllers/eventController';


const router = Router();

router.get('/new', (req, res) => {
    const user: UserDef = req.user;
    res.render('event', { user: user, event: { title: null, description: null, eventDate: null }, message: null }); 
});

router.post('/', createEvent)

router.post('/del', deleteEvent)

export default router;