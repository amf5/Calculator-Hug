export const calculateDateDifference = (
    startDate,
    endDate
) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const differenceInMilliseconds =
        Math.abs(end - start);

    const differenceInDays =
        Math.floor(
            differenceInMilliseconds /
            (1000 * 60 * 60 * 24)
        );

    const differenceInWeeks =
        Math.floor(differenceInDays / 7);

    const differenceInHours =
        Math.floor(
            differenceInMilliseconds /
            (1000 * 60 * 60)
        );

    return {
        startDate,
        endDate,
        differenceInDays,
        differenceInWeeks,
        differenceInHours
    };
};