import {
    getCache,
    setCache
} from "./cache.service.js";

import { AppError } from "../utils/AppError.js";

const API_URL =
    "https://api.frankfurter.app";

export const getCurrencies = async () => {
    const cacheKey =
        "currency:currencies";

    const cached =
        getCache(cacheKey);

    if (cached) {
        return cached;
    }

    const response =
        await fetch(
            `${API_URL}/currencies`
        );

    if (!response.ok) {
        throw new AppError(
            "Currency service unavailable",
            503
        );
    }

    const data =
        await response.json();

    setCache(
        cacheKey,
        data,
        60 * 60 * 1000
    );

    return data;
};

export const getExchangeRates = async (
    base
) => {
    const cacheKey =
        `currency:rates:${base}`;

    const cached =
        getCache(cacheKey);

    if (cached) {
        return cached;
    }

    const response =
        await fetch(
            `${API_URL}/latest?base=${encodeURIComponent(base)}`
        );

    if (!response.ok) {
        throw new AppError(
            "Currency service unavailable",
            503
        );
    }

    const data =
        await response.json();

    setCache(
        cacheKey,
        data,
        10 * 60 * 1000
    );

    return data;
};

export const convertCurrency = async (
    amount,
    from,
    to
) => {
    const response =
        await fetch(
            `${API_URL}/latest?amount=${amount}&from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`
        );

    if (!response.ok) {
        throw new AppError(
            "Currency conversion failed",
            503
        );
    }

    const data =
        await response.json();

    return data;
};