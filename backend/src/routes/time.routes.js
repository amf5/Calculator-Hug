import express from "express";

import {
    timezoneTime
} from "../controllers/time.controller.js";

const router = express.Router();

router.get(
    "/",
    timezoneTime
);

export default router;