import {
    getTimeByTimezone
} from "../services/time.service.js";

import { AppError } from "../utils/AppError.js";
import { sendSuccess } from "../utils/response.js";
export const timezoneTime = (req, res) => {
    const { timezone } = req.query;

    if (!timezone) {
        throw new AppError(
            "timezone is required",
            400
        );
    }

    try {
        const result = getTimeByTimezone(timezone);

        return sendSuccess(res, result);
    } catch {
        throw new AppError(
            "Invalid timezone",
            400
        );
    }
};