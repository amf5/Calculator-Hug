export const calculateLoan = (
    principal,
    annualInterestRate,
    months
) => {
    const monthlyRate =
        annualInterestRate / 100 / 12;

    let monthlyPayment;

    if (monthlyRate === 0) {
        monthlyPayment =
            principal / months;
    } else {
        monthlyPayment =
            principal *
            (
                monthlyRate *
                Math.pow(
                    1 + monthlyRate,
                    months
                )
            ) /
            (
                Math.pow(
                    1 + monthlyRate,
                    months
                ) - 1
            );
    }

    const totalPayment =
        monthlyPayment * months;

    const totalInterest =
        totalPayment - principal;

    return {
        principal,
        annualInterestRate,
        months,
        monthlyPayment: Number(
            monthlyPayment.toFixed(2)
        ),
        totalPayment: Number(
            totalPayment.toFixed(2)
        ),
        totalInterest: Number(
            totalInterest.toFixed(2)
        )
    };
};