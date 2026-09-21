export const calculateBMI = (weight, height) => {
    const heightInMeters = height / 100;

    const bmi = weight / (heightInMeters * heightInMeters);

    let category;

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Normal weight";
    } else if (bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }

    return {
        weight,
        height,
        bmi: Number(bmi.toFixed(2)),
        category
    };
};