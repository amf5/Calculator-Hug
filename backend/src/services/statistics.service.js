export const calculateStatistics = (
    numbers
) => {
    const sorted = [...numbers].sort(
        (a, b) => a - b
    );

    const sum = numbers.reduce(
        (total, number) =>
            total + number,
        0
    );

    const mean =
        sum / numbers.length;

    let median;

    const middle =
        Math.floor(
            sorted.length / 2
        );

    if (
        sorted.length % 2 === 0
    ) {
        median =
            (
                sorted[middle - 1] +
                sorted[middle]
            ) / 2;
    } else {
        median =
            sorted[middle];
    }

    const frequency = new Map();

    for (const number of numbers) {
        frequency.set(
            number,
            (frequency.get(number) || 0) + 1
        );
    }

    let maxFrequency = 0;

    for (const count of frequency.values()) {
        maxFrequency =
            Math.max(
                maxFrequency,
                count
            );
    }

    const mode =
        maxFrequency === 1
            ? null
            : [...frequency.entries()]
                .filter(
                    ([, count]) =>
                        count === maxFrequency
                )
                .map(
                    ([number]) => number
                );

    const variance =
        numbers.reduce(
            (total, number) =>
                total +
                Math.pow(
                    number - mean,
                    2
                ),
            0
        ) / numbers.length;

    const standardDeviation =
        Math.sqrt(variance);

    return {
        count: numbers.length,
        sum,
        mean: Number(mean.toFixed(4)),
        median,
        mode,
        minimum: Math.min(...numbers),
        maximum: Math.max(...numbers),
        range:
            Math.max(...numbers) -
            Math.min(...numbers),
        variance:
            Number(variance.toFixed(4)),
        standardDeviation:
            Number(
                standardDeviation.toFixed(4)
            )
    };
};