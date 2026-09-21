import express from "express";

import {
    simpleInterest,
    compoundInterest,
    tipCalculator,
    roiCalculator
} from "../controllers/finance.controller.js";

const router = express.Router();

router.post(
    "/simple-interest",
    simpleInterest
);

router.post(
    "/compound-interest",
    compoundInterest
);

router.post(
    "/tip",
    tipCalculator
);

router.post(
    "/roi",
    roiCalculator
);

export default router;