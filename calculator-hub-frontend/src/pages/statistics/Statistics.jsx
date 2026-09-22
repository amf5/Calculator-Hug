import { useState } from "react";
import api from "../../services/api";
import ResultCard from "../../components/common/ResultCard";

const Statistics = () => {
    const [numbers, setNumbers] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        setError("");
        setResult(null);

        /*
         * Accept:
         * 10 20 30
         * 10,20,30
         * 10, 20, 30
         * 10
         * 20
         * 30
         *
         * Any spaces, commas or new lines
         * will be treated as separators.
         */
        const values = numbers
            .trim()
            .split(/[\s,]+/)
            .map((value) => Number(value))
            .filter((value) => !Number.isNaN(value));

        if (values.length === 0) {
            setError("Please enter at least one valid number.");
            return;
        }

        try {
            setLoading(true);

            const response = await api.post(
                "/api/v1/statistics",
                {
                    numbers: values
                }
            );

            setResult(response.data.data);
        } catch (error) {
            setError(
                error.response?.data?.message ||
                "Statistics calculation failed."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="calculator-page">
            <div className="container calculator-container">

                <div className="calculator-header">
                    <p className="eyebrow">
                        STATISTICS
                    </p>

                    <h1>
                        Statistics Calculator
                    </h1>

                    <p>
                        Calculate statistical values
                        from a list of numbers.
                    </p>
                </div>

                <form
                    className="calculator-form"
                    onSubmit={handleSubmit}
                >
                    <div className="form-group">

                        <label>
                            Numbers
                        </label>

                        <textarea
                            value={numbers}
                            onChange={(event) => {
                                setNumbers(
                                    event.target.value
                                );

                                setError("");
                                setResult(null);
                            }}
                            placeholder={`Enter numbers

Example:
10 20 20 30 40 50`}
                            rows="6"
                        />

                        <small>
                            You can separate numbers with
                            spaces, commas, or new lines.
                        </small>

                    </div>

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
                        title="Statistics Result"
                        data={result}
                    />
                )}

            </div>
        </main>
    );
};

export default Statistics;