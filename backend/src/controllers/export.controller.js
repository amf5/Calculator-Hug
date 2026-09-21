import {
    objectToCSV
} from "../services/export.service.js";

import { AppError } from "../utils/AppError.js";

export const exportCSV = (
    req,
    res
) => {
    const { data } = req.body;

    if (
        !data ||
        typeof data !== "object" ||
        Array.isArray(data)
    ) {
        throw new AppError(
            "data must be an object",
            400
        );
    }

    const csv =
        objectToCSV(data);

    res.setHeader(
        "Content-Type",
        "text/csv"
    );

    res.setHeader(
        "Content-Disposition",
        "attachment; filename=result.csv"
    );

    return res.send(csv);
};