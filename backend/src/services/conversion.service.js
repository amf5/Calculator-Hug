const lengthToMeter = {
    meter: 1,
    kilometer: 1000,
    centimeter: 0.01,
    millimeter: 0.001,
    mile: 1609.344,
    yard: 0.9144,
    foot: 0.3048,
    inch: 0.0254
};

const weightToKg = {
    kilogram: 1,
    gram: 0.001,
    milligram: 0.000001,
    pound: 0.45359237,
    ounce: 0.028349523125
};

export const convertLength = (
    value,
    from,
    to
) => {
    if (
        !(from in lengthToMeter) ||
        !(to in lengthToMeter)
    ) {
        throw new Error(
            "Unsupported length unit"
        );
    }

    const meters =
        value * lengthToMeter[from];

    return (
        meters /
        lengthToMeter[to]
    );
};

export const convertWeight = (
    value,
    from,
    to
) => {
    if (
        !(from in weightToKg) ||
        !(to in weightToKg)
    ) {
        throw new Error(
            "Unsupported weight unit"
        );
    }

    const kilograms =
        value * weightToKg[from];

    return (
        kilograms /
        weightToKg[to]
    );
};

export const convertTemperature = (
    value,
    from,
    to
) => {
    let celsius;

    if (from === "celsius") {
        celsius = value;
    } else if (from === "fahrenheit") {
        celsius =
            (value - 32) * 5 / 9;
    } else if (from === "kelvin") {
        celsius =
            value - 273.15;
    } else {
        throw new Error(
            "Unsupported temperature unit"
        );
    }

    if (to === "celsius") {
        return celsius;
    }

    if (to === "fahrenheit") {
        return (
            celsius * 9 / 5 + 32
        );
    }

    if (to === "kelvin") {
        return (
            celsius + 273.15
        );
    }

    throw new Error(
        "Unsupported temperature unit"
    );
};