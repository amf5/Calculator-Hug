export const factorial = (number) => {
    if (number < 0) {
        throw new Error(
            "number cannot be negative"
        );
    }

    let result = 1;

    for (
        let i = 2;
        i <= number;
        i++
    ) {
        result *= i;
    }

    return result;
};

export const isPrime = (number) => {
    if (number < 2) {
        return false;
    }

    for (
        let i = 2;
        i <= Math.sqrt(number);
        i++
    ) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
};

export const gcd = (a, b) => {
    a = Math.abs(a);
    b = Math.abs(b);

    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }

    return a;
};

export const lcm = (a, b) => {
    if (a === 0 || b === 0) {
        return 0;
    }

    return Math.abs(
        a * b
    ) / gcd(a, b);
};