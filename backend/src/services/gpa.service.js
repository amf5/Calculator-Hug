export const calculateGPA = (subjects) => {
    let totalQualityPoints = 0;
    let totalCreditHours = 0;

    for (const subject of subjects) {
        totalQualityPoints +=
            subject.gradePoint * subject.creditHours;

        totalCreditHours += subject.creditHours;
    }

    const gpa = totalQualityPoints / totalCreditHours;

    return {
        subjects,
        totalCreditHours,
        totalQualityPoints: Number(
            totalQualityPoints.toFixed(2)
        ),
        gpa: Number(gpa.toFixed(2))
    };
};