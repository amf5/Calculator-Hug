import express from "express";

import {
    statisticsCalculator
} from "../controllers/statistics.controller.js";

const router = express.Router();

router.post(
    "/",
    statisticsCalculator
);

export default router;