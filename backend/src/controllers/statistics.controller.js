import {
    calculateStatistics
} from "../services/statistics.service.js";

import { AppError } from "../utils/AppError.js";
import { sendSuccess } from "../utils/response.js";

export const statisticsCalculator = (
    req,
    res
) => {
    const { numbers } = req.body;

    if (!Array.isArray(numbers)) {
        throw new AppError(
            "numbers must be an array",
            400
        );
    }

    if (numbers.length === 0) {
        throw new AppError(
            "numbers cannot be empty",
            400
        );
    }

    if (
        numbers.some(
            number =>
                typeof number !== "number" ||
                !Number.isFinite(number)
        )
    ) {
        throw new AppError(
            "all values must be valid numbers",
            400
        );
    }

    const result =
        calculateStatistics(
            numbers
        );

    return sendSuccess(res, result);
};