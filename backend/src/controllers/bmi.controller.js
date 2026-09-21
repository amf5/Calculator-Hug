import { calculateBMI } from "../services/bmi.service.js";

export const bmiCalculator = (req, res) => {
    try {
        const { weight, height } = req.body;

        if (weight === undefined || height === undefined) {
            return res.status(400).json({
                success: false,
                message: "weight and height are required"
            });
        }

        if (
            typeof weight !== "number" ||
            typeof height !== "number"
        ) {
            return res.status(400).json({
                success: false,
                message: "weight and height must be numbers"
            });
        }

        if (weight <= 0 || height <= 0) {
            return res.status(400).json({
                success: false,
                message: "weight and height must be greater than 0"
            });
        }

        const result = calculateBMI(weight, height);

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