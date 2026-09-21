import {
    getCurrencies,
    getExchangeRates,
    convertCurrency
} from "../services/currency.service.js";

import { AppError } from "../utils/AppError.js";
import { sendSuccess } from "../utils/response.js";

export const currencies = async (
    req,
    res
) => {
    const result =
        await getCurrencies();

    return sendSuccess(
        res,
        result
    );
};

export const rates = async (
    req,
    res
) => {
    const base =
        req.query.base || "EUR";

    if (
        typeof base !== "string" ||
        base.length !== 3
    ) {
        throw new AppError(
            "base must be a 3-letter currency code",
            400
        );
    }

    const result =
        await getExchangeRates(
            base.toUpperCase()
        );

    return sendSuccess(
        res,
        result
    );
};

export const conversion = async (
    req,
    res
) => {
    const {
        amount,
        from,
        to
    } = req.body;

    if (
        typeof amount !== "number" ||
        amount <= 0
    ) {
        throw new AppError(
            "amount must be greater than 0",
            400
        );
    }

    if (
        typeof from !== "string" ||
        typeof to !== "string" ||
        from.length !== 3 ||
        to.length !== 3
    ) {
        throw new AppError(
            "from and to must be 3-letter currency codes",
            400
        );
    }

    const result =
        await convertCurrency(
            amount,
            from.toUpperCase(),
            to.toUpperCase()
        );

    return sendSuccess(
        res,
        result
    );
};