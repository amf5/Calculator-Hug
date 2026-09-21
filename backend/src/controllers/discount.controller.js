import { calculateDiscount } from "../services/discount.service.js";

export const discountCalculator = (req, res) => {
    try {
        const { price, discountPercentage } = req.body;

        if (price === undefined || discountPercentage === undefined) {
            return res.status(400).json({
                success: false,
                message: "price and discountPercentage are required"
            });
        }

        if (
            typeof price !== "number" ||
            typeof discountPercentage !== "number"
        ) {
            return res.status(400).json({
                success: false,
                message: "price and discountPercentage must be numbers"
            });
        }

        if (price < 0) {
            return res.status(400).json({
                success: false,
                message: "price cannot be negative"
            });
        }

        if (
            discountPercentage < 0 ||
            discountPercentage > 100
        ) {
            return res.status(400).json({
                success: false,
                message: "discountPercentage must be between 0 and 100"
            });
        }

        const result = calculateDiscount(
            price,
            discountPercentage
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