export const calculateSimpleInterest = (
    principal,
    rate,
    years
) => {
    const interest =
        principal *
        (rate / 100) *
        years;

    return {
        principal,
        rate,
        years,
        interest:
            Number(interest.toFixed(2)),
        total:
            Number(
                (principal + interest)
                    .toFixed(2)
            )
    };
};

export const calculateCompoundInterest = (
    principal,
    rate,
    years,
    compoundsPerYear
) => {
    const amount =
        principal *
        Math.pow(
            1 +
            rate /
            100 /
            compoundsPerYear,
            compoundsPerYear * years
        );

    const interest =
        amount - principal;

    return {
        principal,
        rate,
        years,
        compoundsPerYear,
        interest:
            Number(
                interest.toFixed(2)
            ),
        total:
            Number(
                amount.toFixed(2)
            )
    };
};

export const calculateTip = (
    bill,
    tipPercentage,
    people = 1
) => {
    const tip =
        bill *
        tipPercentage /
        100;

    const total =
        bill + tip;

    return {
        bill,
        tipPercentage,
        people,
        tip:
            Number(tip.toFixed(2)),
        total:
            Number(total.toFixed(2)),
        perPerson:
            Number(
                (total / people)
                    .toFixed(2)
            )
    };
};

export const calculateROI = (
    investment,
    returnAmount
) => {
    const profit =
        returnAmount -
        investment;

    const roi =
        (profit / investment) *
        100;

    return {
        investment,
        returnAmount,
        profit:
            Number(profit.toFixed(2)),
        roi:
            Number(roi.toFixed(2))
    };
};