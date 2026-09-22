import { useState } from "react";
import api from "../../services/api";
import ResultCard from "../../components/common/ResultCard";

const ConversionPage = ({
    type = "length"
}) => {

    const units = {

        length: [
            "meter",
            "kilometer",
            "centimeter",
            "millimeter",
            "mile",
            "yard",
            "foot",
            "inch"
        ],

        weight: [
            "gram",
            "kilogram",
            "milligram",
            "pound",
            "ounce"
        ],

        temperature: [
            "celsius",
            "fahrenheit",
            "kelvin"
        ]

    };

    const [value, setValue] =
        useState("");

    const [from, setFrom] =
        useState("");

    const [to, setTo] =
        useState("");

    const [result, setResult] =
        useState(null);

    const [error, setError] =
        useState("");

    const [loading, setLoading] =
        useState(false);

    const handleSubmit = async (event) => {

        event.preventDefault();

        setError("");
        setResult(null);

        if (
            value === "" ||
            from === "" ||
            to === ""
        ) {

            setError(
                "Please fill in all fields."
            );

            return;
        }

        try {

            setLoading(true);

            const response =
                await api.post(
                    `/api/v1/conversions/${type}`,
                    {
                        value: Number(value),
                        from,
                        to
                    }
                );

            setResult(
                response.data.data
            );

        } catch (error) {

            setError(
                error.response?.data?.message ||
                "Conversion failed."
            );

        } finally {

            setLoading(false);

        }
    };

    const titles = {
        length: "Length Converter",
        weight: "Weight Converter",
        temperature:
            "Temperature Converter"
    };

    return (
        <main className="calculator-page">

            <div className="container calculator-container">

                <div className="calculator-header">

                    <p className="eyebrow">
                        CONVERSIONS
                    </p>

                    <h1>
                        {titles[type]}
                    </h1>

                    <p>
                        Convert values quickly
                        between different units.
                    </p>

                </div>

                <form
                    className="calculator-form"
                    onSubmit={handleSubmit}
                >

                    <div className="form-group">

                        <label>
                            Value
                        </label>

                        <input
                            type="number"
                            step="any"
                            value={value}
                            onChange={(event) =>
                                setValue(
                                    event.target.value
                                )
                            }
                            placeholder="Enter value"
                        />

                    </div>

                    <div className="form-group">

                        <label>
                            From
                        </label>

                        <select
                            value={from}
                            onChange={(event) =>
                                setFrom(
                                    event.target.value
                                )
                            }
                        >

                            <option value="">
                                Select unit
                            </option>

                            {units[type].map(
                                (unit) => (
                                    <option
                                        key={unit}
                                        value={unit}
                                    >
                                        {unit}
                                    </option>
                                )
                            )}

                        </select>

                    </div>

                    <div className="form-group">

                        <label>
                            To
                        </label>

                        <select
                            value={to}
                            onChange={(event) =>
                                setTo(
                                    event.target.value
                                )
                            }
                        >

                            <option value="">
                                Select unit
                            </option>

                            {units[type].map(
                                (unit) => (
                                    <option
                                        key={unit}
                                        value={unit}
                                    >
                                        {unit}
                                    </option>
                                )
                            )}

                        </select>

                    </div>

                    <button
                        type="submit"
                        className="calculate-button"
                        disabled={loading}
                    >
                        {loading
                            ? "Converting..."
                            : "Convert"}
                    </button>

                    {error && (
                        <div className="error-message">
                            {error}
                        </div>
                    )}

                </form>

                {result && (
                    <ResultCard
                        title="Conversion Result"
                        data={result}
                    />
                )}

            </div>

        </main>
    );
};

export default ConversionPage;