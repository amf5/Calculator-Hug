import { useState } from "react";
import api from "../../services/api";
import ResultCard from "../../components/common/ResultCard";

const Time = () => {
    const [timezone, setTimezone] =
        useState("Africa/Cairo");

    const [result, setResult] =
        useState(null);

    const [error, setError] =
        useState("");

    const [loading, setLoading] =
        useState(false);

    const timezones = [
        "Africa/Cairo",
        "Europe/London",
        "Europe/Paris",
        "Asia/Tokyo",
        "Asia/Dubai",
        "Asia/Riyadh",
        "Asia/Kolkata",
        "America/New_York",
        "America/Los_Angeles",
        "Australia/Sydney"
    ];

    const handleSubmit = async (event) => {
        event.preventDefault();

        setError("");
        setResult(null);

        try {
            setLoading(true);

            const response = await api.get(
                `/api/v1/time/${timezone}`
            );

            setResult(response.data.data);

        } catch (error) {
            setError(
                error.response?.data?.message ||
                "Failed to get timezone information."
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
                        TIME ZONES
                    </p>

                    <h1>
                        World Time
                    </h1>

                    <p>
                        Get the current time for
                        different time zones.
                    </p>
                </div>

                <form
                    className="calculator-form"
                    onSubmit={handleSubmit}
                >
                    <div className="form-group">
                        <label>
                            Time Zone
                        </label>

                        <select
                            value={timezone}
                            onChange={(event) =>
                                setTimezone(
                                    event.target.value
                                )
                            }
                        >
                            {timezones.map(
                                (zone) => (
                                    <option
                                        key={zone}
                                        value={zone}
                                    >
                                        {zone}
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
                            ? "Loading..."
                            : "Get Current Time"}
                    </button>

                    {error && (
                        <div className="error-message">
                            {error}
                        </div>
                    )}
                </form>

                {result && (
                    <ResultCard
                        title="Time Zone Result"
                        data={result}
                    />
                )}

            </div>
        </main>
    );
};

export default Time;