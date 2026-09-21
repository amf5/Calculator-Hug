import { calculateSalary } from "../services/salary.service.js";

export const salaryCalculator = (req, res) => {
    try {
        const {
            grossSalary,
            deductionsPercentage
        } = req.body;

        if (
            grossSalary === undefined ||
            deductionsPercentage === undefined
        ) {
            return res.status(400).json({
                success: false,
                message:
                    "grossSalary and deductionsPercentage are required"
            });
        }

        if (
            typeof grossSalary !== "number" ||
            typeof deductionsPercentage !== "number"
        ) {
            return res.status(400).json({
                success: false,
                message:
                    "grossSalary and deductionsPercentage must be numbers"
            });
        }

        if (grossSalary < 0) {
            return res.status(400).json({
                success: false,
                message: "grossSalary cannot be negative"
            });
        }

        if (
            deductionsPercentage < 0 ||
            deductionsPercentage > 100
        ) {
            return res.status(400).json({
                success: false,
                message:
                    "deductionsPercentage must be between 0 and 100"
            });
        }

        const result = calculateSalary(
            grossSalary,
            deductionsPercentage
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