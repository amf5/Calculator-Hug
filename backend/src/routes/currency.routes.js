import express from "express";

import {
    currencies,
    rates,
    conversion
} from "../controllers/currency.controller.js";

const router = express.Router();

router.get(
    "/currencies",
    currencies
);

router.get(
    "/rates",
    rates
);

router.post(
    "/convert",
    conversion
);

export default router;