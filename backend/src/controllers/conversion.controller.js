import {
    convertLength,
    convertWeight,
    convertTemperature
} from "../services/conversion.service.js";

import { AppError } from "../utils/AppError.js";
import { sendSuccess } from "../utils/response.js";

const validate = (
    value,
    from,
    to
) => {
    if (
        typeof value !== "number" ||
        !Number.isFinite(value)
    ) {
        throw new AppError(
            "value must be a valid number",
            400
        );
    }

    if (!from || !to) {
        throw new AppError(
            "from and to are required",
            400
        );
    }
};

export const lengthConversion = (
    req,
    res
) => {
    const {
        value,
        from,
        to
    } = req.body;

    validate(value, from, to);

    const result =
        convertLength(
            value,
            from,
            to
        );

    return sendSuccess(res, {
        value,
        from,
        to,
        result: Number(
            result.toFixed(6)
        )
    });
};

export const weightConversion = (
    req,
    res
) => {
    const {
        value,
        from,
        to
    } = req.body;

    validate(value, from, to);

    const result =
        convertWeight(
            value,
            from,
            to
        );

    return sendSuccess(res, {
        value,
        from,
        to,
        result: Number(
            result.toFixed(6)
        )
    });
};

export const temperatureConversion = (
    req,
    res
) => {
    const {
        value,
        from,
        to
    } = req.body;

    validate(value, from, to);

    const result =
        convertTemperature(
            value,
            from,
            to
        );

    return sendSuccess(res, {
        value,
        from,
        to,
        result: Number(
            result.toFixed(6)
        )
    });
};