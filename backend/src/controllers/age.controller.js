import { calculateAge } from "../services/age.service.js";

export const ageCalculator = (req, res) => {
    try {
        const { birthDate } = req.body;

        if (!birthDate) {
            return res.status(400).json({
                success: false,
                message: "birthDate is required"
            });
        }

        const birth = new Date(birthDate);

        if (Number.isNaN(birth.getTime())) {
            return res.status(400).json({
                success: false,
                message: "Invalid birthDate"
            });
        }

        const today = new Date();

        if (birth > today) {
            return res.status(400).json({
                success: false,
                message: "birthDate cannot be in the future"
            });
        }

        const result = calculateAge(birthDate);

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