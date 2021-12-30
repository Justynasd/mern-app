"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const eventController_1 = require("../controllers/eventController");
const router = (0, express_1.Router)();
router.get('/', eventController_1.getEventsByUsername);
exports.default = router;
//# sourceMappingURL=index.js.map