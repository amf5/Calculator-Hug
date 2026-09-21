import express from "express";

import {
    factorialCalculator,
    primeCalculator,
    gcdCalculator,
    lcmCalculator
} from "../controllers/number.controller.js";

const router = express.Router();

router.post(
    "/factorial",
    factorialCalculator
);

router.post(
    "/prime",
    primeCalculator
);

router.post(
    "/gcd",
    gcdCalculator
);

router.post(
    "/lcm",
    lcmCalculator
);

export default router;