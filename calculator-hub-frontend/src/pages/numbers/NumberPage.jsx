import { useState } from "react";

import api from "../../services/api";

import ResultCard from "../../components/common/ResultCard";

const NumberPage = ({ type }) => {
    const [value, setValue] = useState("");
    const [secondValue, setSecondValue] = useState("");

    const [result, setResult] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const config = {
        factorial: {
            title: "Factorial Calculator",
            description:
                "Calculate the factorial of a number.",
            endpoint: "/api/v1/numbers/factorial",
            label: "Number",
            placeholder: "Enter a number"
        },

        prime: {
            title: "Prime Number Checker",
            description:
                "Check whether a number is prime.",
            endpoint: "/api/v1/numbers/prime",
            label: "Number",
            placeholder: "Enter a number"
        },

        gcd: {
            title: "GCD Calculator",
            description:
                "Calculate the greatest common divisor of two numbers.",
            endpoint: "/api/v1/numbers/gcd",
            label: "First Number",
            placeholder: "Enter the first number"
        },

        lcm: {
            title: "LCM Calculator",
            description:
                "Calculate the least common multiple of two numbers.",
            endpoint: "/api/v1/numbers/lcm",
            label: "First Number",
            placeholder: "Enter the first number"
        }
    };

    const current = config[type];

    const handleSubmit = async (event) => {
        event.preventDefault();

        setError("");
        setResult(null);

        if (value.trim() === "") {
            setError("Please enter a valid number.");
            return;
        }

        const firstNumber = Number(value);

        if (!Number.isFinite(firstNumber)) {
            setError("Please enter a valid number.");
            return;
        }

        if (
            (type === "gcd" || type === "lcm") &&
            secondValue.trim() === ""
        ) {
            setError("Please enter the second number.");
            return;
        }

        const secondNumber = Number(secondValue);

        if (
            (type === "gcd" || type === "lcm") &&
            !Number.isFinite(secondNumber)
        ) {
            setError("Please enter a valid second number.");
            return;
        }

        try {
            setLoading(true);

            let data;

            /*
             * Factorial + Prime
             *
             * Backend expects:
             * {
             *     value: 5
             * }
             */
            if (
                type === "factorial" ||
                type === "prime"
            ) {
                data = {
                    value: firstNumber
                };
            }

            /*
             * GCD + LCM
             *
             * Backend expects:
             * {
             *     a: 48,
             *     b: 18
             * }
             */
            if (
                type === "gcd" ||
                type === "lcm"
            ) {
                data = {
                    a: firstNumber,
                    b: secondNumber
                };
            }

            console.log(
                "Number API Request:",
                data
            );

            const response = await api.post(
                current.endpoint,
                data
            );

            setResult(
                response.data.data
            );

        } catch (error) {
            console.error(
                "Number API Error:",
                error
            );

            setError(
                error.response?.data?.message ||
                "Calculation failed."
            );
        } finally {
            setLoading(false);
        }
    };

    if (!current) {
        return null;
    }

    return (
        <main className="calculator-page">

            <div className="container calculator-container">

                <div className="calculator-header">

                    <p className="eyebrow">
                        NUMBERS
                    </p>

                    <h1>
                        {current.title}
                    </h1>

                    <p>
                        {current.description}
                    </p>

                </div>

                <form
                    className="calculator-form"
                    onSubmit={handleSubmit}
                >

                    <div className="form-group">

                        <label>
                            {current.label}
                        </label>

                        <input
                            type="number"
                            step="any"
                            value={value}
                            onChange={(event) => {
                                setValue(
                                    event.target.value
                                );

                                setError("");
                                setResult(null);
                            }}
                            placeholder={
                                current.placeholder
                            }
                        />

                    </div>

                    {(type === "gcd" ||
                        type === "lcm") && (

                        <div className="form-group">

                            <label>
                                Second Number
                            </label>

                            <input
                                type="number"
                                step="any"
                                value={secondValue}
                                onChange={(event) => {
                                    setSecondValue(
                                        event.target.value
                                    );

                                    setError("");
                                    setResult(null);
                                }}
                                placeholder="Enter the second number"
                            />

                        </div>
                    )}

                    <button
                        type="submit"
                        className="calculate-button"
                        disabled={loading}
                    >
                        {loading
                            ? "Calculating..."
                            : "Calculate"}
                    </button>

                    {error && (
                        <div className="error-message">
                            {error}
                        </div>
                    )}

                </form>

                {result && (
                    <ResultCard
                        title="Calculation Result"
                        data={result}
                    />
                )}

            </div>

        </main>
    );
};

export default NumberPage;