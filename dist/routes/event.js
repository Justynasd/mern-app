"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const eventController_1 = require("../controllers/eventController");
const router = (0, express_1.Router)();
router.get('/new', (req, res) => {
    const user = req.user;
    res.render('event', { user: user, event: { title: null, description: null, eventDate: null }, message: null });
});
router.post('/', eventController_1.createEvent);
router.post('/del', eventController_1.deleteEvent);
exports.default = router;
//# sourceMappingURL=event.js.map