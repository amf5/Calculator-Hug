import { calculateGPA } from "../services/gpa.service.js";

export const gpaCalculator = (req, res) => {
    try {
        const { subjects } = req.body;

        if (!subjects) {
            return res.status(400).json({
                success: false,
                message: "subjects are required"
            });
        }

        if (!Array.isArray(subjects)) {
            return res.status(400).json({
                success: false,
                message: "subjects must be an array"
            });
        }

        if (subjects.length === 0) {
            return res.status(400).json({
                success: false,
                message: "subjects cannot be empty"
            });
        }

        for (const subject of subjects) {
            if (
                typeof subject.creditHours !== "number" ||
                typeof subject.gradePoint !== "number"
            ) {
                return res.status(400).json({
                    success: false,
                    message:
                        "creditHours and gradePoint must be numbers"
                });
            }

            if (subject.creditHours <= 0) {
                return res.status(400).json({
                    success: false,
                    message:
                        "creditHours must be greater than 0"
                });
            }

            if (
                subject.gradePoint < 0 ||
                subject.gradePoint > 4
            ) {
                return res.status(400).json({
                    success: false,
                    message:
                        "gradePoint must be between 0 and 4"
                });
            }
        }

        const result = calculateGPA(subjects);

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