export const calculateSalary = (
    grossSalary,
    deductionsPercentage
) => {
    const deductions =
        (grossSalary * deductionsPercentage) / 100;

    const netSalary = grossSalary - deductions;

    return {
        grossSalary,
        deductionsPercentage,
        deductions: Number(deductions.toFixed(2)),
        netSalary: Number(netSalary.toFixed(2))
    };
};