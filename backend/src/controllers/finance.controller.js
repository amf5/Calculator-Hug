import {
    calculateSimpleInterest,
    calculateCompoundInterest,
    calculateTip,
    calculateROI
} from "../services/finance.service.js";

import { AppError } from "../utils/AppError.js";
import { sendSuccess } from "../utils/response.js";

const number = (
    value,
    name
) => {
    if (
        typeof value !== "number" ||
        !Number.isFinite(value)
    ) {
        throw new AppError(
            `${name} must be a valid number`,
            400
        );
    }
};

export const simpleInterest = (
    req,
    res
) => {
    const {
        principal,
        rate,
        years
    } = req.body;

    number(principal, "principal");
    number(rate, "rate");
    number(years, "years");

    if (
        principal <= 0 ||
        rate < 0 ||
        years <= 0
    ) {
        throw new AppError(
            "Invalid financial values",
            400
        );
    }

    return sendSuccess(
        res,
        calculateSimpleInterest(
            principal,
            rate,
            years
        )
    );
};

export const compoundInterest = (
    req,
    res
) => {
    const {
        principal,
        rate,
        years,
        compoundsPerYear
    } = req.body;

    number(principal, "principal");
    number(rate, "rate");
    number(years, "years");
    number(
        compoundsPerYear,
        "compoundsPerYear"
    );

    if (
        principal <= 0 ||
        rate < 0 ||
        years <= 0 ||
        compoundsPerYear <= 0
    ) {
        throw new AppError(
            "Invalid financial values",
            400
        );
    }

    return sendSuccess(
        res,
        calculateCompoundInterest(
            principal,
            rate,
            years,
            compoundsPerYear
        )
    );
};

export const tipCalculator = (
    req,
    res
) => {
    const {
        bill,
        tipPercentage,
        people = 1
    } = req.body;

    number(bill, "bill");
    number(
        tipPercentage,
        "tipPercentage"
    );
    number(people, "people");

    if (
        bill < 0 ||
        tipPercentage < 0 ||
        people <= 0
    ) {
        throw new AppError(
            "Invalid tip values",
            400
        );
    }

    return sendSuccess(
        res,
        calculateTip(
            bill,
            tipPercentage,
            people
        )
    );
};

export const roiCalculator = (
    req,
    res
) => {
    const {
        investment,
        returnAmount
    } = req.body;

    number(
        investment,
        "investment"
    );

    number(
        returnAmount,
        "returnAmount"
    );

    if (investment <= 0) {
        throw new AppError(
            "investment must be greater than 0",
            400
        );
    }

    return sendSuccess(
        res,
        calculateROI(
            investment,
            returnAmount
        )
    );
};