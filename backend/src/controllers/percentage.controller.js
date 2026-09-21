import { calculatePercentage } from "../services/percentage.service.js";

export const percentageCalculator = (req, res) => {
    try {
        const { value, percentage } = req.body;

        if (value === undefined || percentage === undefined) {
            return res.status(400).json({
                success: false,
                message: "value and percentage are required"
            });
        }

        if (
            typeof value !== "number" ||
            typeof percentage !== "number"
        ) {
            return res.status(400).json({
                success: false,
                message: "value and percentage must be numbers"
            });
        }

        const result = calculatePercentage(value, percentage);

        return res.status(200).json({
            success: true,
            data: {
                value,
                percentage,
                result
            }
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};