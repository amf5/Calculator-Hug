import {
    factorial,
    isPrime,
    gcd,
    lcm
} from "../services/number.service.js";

import { AppError } from "../utils/AppError.js";
import { sendSuccess } from "../utils/response.js";

const validateNumber = (value) => {
    if (
        typeof value !== "number" ||
        !Number.isFinite(value)
    ) {
        throw new AppError(
            "value must be a valid number",
            400
        );
    }
};

export const factorialCalculator = (
    req,
    res
) => {
    const { value } = req.body;

    validateNumber(value);

    if (!Number.isInteger(value)) {
        throw new AppError(
            "value must be an integer",
            400
        );
    }

    if (value > 170) {
        throw new AppError(
            "value is too large",
            400
        );
    }

    return sendSuccess(
        res,
        {
            value,
            result: factorial(value)
        }
    );
};

export const primeCalculator = (
    req,
    res
) => {
    const { value } = req.body;

    validateNumber(value);

    if (!Number.isInteger(value)) {
        throw new AppError(
            "value must be an integer",
            400
        );
    }

    return sendSuccess(
        res,
        {
            value,
            isPrime: isPrime(value)
        }
    );
};

export const gcdCalculator = (
    req,
    res
) => {
    const { a, b } = req.body;

    validateNumber(a);
    validateNumber(b);

    return sendSuccess(
        res,
        {
            a,
            b,
            gcd: gcd(a, b)
        }
    );
};

export const lcmCalculator = (
    req,
    res
) => {
    const { a, b } = req.body;

    validateNumber(a);
    validateNumber(b);

    return sendSuccess(
        res,
        {
            a,
            b,
            lcm: lcm(a, b)
        }
    );
};