import {
    calculateDateDifference
} from "../services/date.service.js";

export const dateDifferenceCalculator = (req, res) => {
    try {
        const {
            startDate,
            endDate
        } = req.body;

        if (!startDate || !endDate) {
            return res.status(400).json({
                success: false,
                message:
                    "startDate and endDate are required"
            });
        }

        const start = new Date(startDate);
        const end = new Date(endDate);

        if (
            Number.isNaN(start.getTime()) ||
            Number.isNaN(end.getTime())
        ) {
            return res.status(400).json({
                success: false,
                message: "Invalid date format"
            });
        }

        const result = calculateDateDifference(
            startDate,
            endDate
        );

        return res.status(200).json({
            success: true,
            data: result
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};