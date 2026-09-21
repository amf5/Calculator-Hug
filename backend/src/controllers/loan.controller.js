import { calculateLoan } from "../services/loan.service.js";

export const loanCalculator = (req, res) => {
    try {
        const {
            principal,
            annualInterestRate,
            months
        } = req.body;

        if (
            principal === undefined ||
            annualInterestRate === undefined ||
            months === undefined
        ) {
            return res.status(400).json({
                success: false,
                message:
                    "principal, annualInterestRate and months are required"
            });
        }

        if (
            typeof principal !== "number" ||
            typeof annualInterestRate !== "number" ||
            typeof months !== "number"
        ) {
            return res.status(400).json({
                success: false,
                message:
                    "principal, annualInterestRate and months must be numbers"
            });
        }

        if (principal <= 0) {
            return res.status(400).json({
                success: false,
                message:
                    "principal must be greater than 0"
            });
        }

        if (annualInterestRate < 0) {
            return res.status(400).json({
                success: false,
                message:
                    "annualInterestRate cannot be negative"
            });
        }

        if (months <= 0) {
            return res.status(400).json({
                success: false,
                message:
                    "months must be greater than 0"
            });
        }

        const result = calculateLoan(
            principal,
            annualInterestRate,
            months
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