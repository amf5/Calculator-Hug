import express from "express";

import {
    lengthConversion,
    weightConversion,
    temperatureConversion
} from "../controllers/conversion.controller.js";

const router = express.Router();

router.post(
    "/length",
    lengthConversion
);

router.post(
    "/weight",
    weightConversion
);

router.post(
    "/temperature",
    temperatureConversion
);

export default router;