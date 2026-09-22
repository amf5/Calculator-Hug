import { useEffect, useState } from "react";
import api from "../../services/api";
import ResultCard from "../../components/common/ResultCard";

const Currency = () => {
    const [currencies, setCurrencies] = useState([]);

    const [amount, setAmount] = useState("");
    const [from, setFrom] = useState("USD");
    const [to, setTo] = useState("EUR");

    const [result, setResult] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [loadingCurrencies, setLoadingCurrencies] =
        useState(true);

    useEffect(() => {
        const loadCurrencies = async () => {
            try {
                setLoadingCurrencies(true);

                const response = await api.get(
                    "/api/v1/currency/currencies"
                );

                const data = response.data.data;

                if (Array.isArray(data)) {
                    setCurrencies(data);
                } else if (
                    data &&
                    typeof data === "object"
                ) {
                    setCurrencies(
                        Object.keys(data)
                    );
                } else {
                    setCurrencies([]);
                }

            } catch (error) {
                setError(
                    error.response?.data?.message ||
                    "Failed to load currencies."
                );
            } finally {
                setLoadingCurrencies(false);
            }
        };

        loadCurrencies();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        setError("");
        setResult(null);

        if (amount === "") {
            setError("Please enter an amount.");
            return;
        }

        if (!from || !to) {
            setError(
                "Please select both currencies."
            );
            return;
        }

        try {
            setLoading(true);

            const response = await api.post(
                "/api/v1/currency/convert",
                {
                    amount: Number(amount),
                    from,
                    to
                }
            );

            setResult(response.data.data);

        } catch (error) {
            setError(
                error.response?.data?.message ||
                "Currency conversion failed."
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
                        CURRENCY
                    </p>

                    <h1>
                        Currency Converter
                    </h1>

                    <p>
                        Convert currencies using
                        current exchange rates.
                    </p>
                </div>

                <form
                    className="calculator-form"
                    onSubmit={handleSubmit}
                >

                    <div className="form-group">
                        <label>
                            Amount
                        </label>

                        <input
                            type="number"
                            step="any"
                            value={amount}
                            onChange={(event) =>
                                setAmount(
                                    event.target.value
                                )
                            }
                            placeholder="100"
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
                            disabled={
                                loadingCurrencies
                            }
                        >
                            {loadingCurrencies ? (
                                <option>
                                    Loading...
                                </option>
                            ) : (
                                currencies.map(
                                    (currency) => (
                                        <option
                                            key={currency}
                                            value={currency}
                                        >
                                            {currency}
                                        </option>
                                    )
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
                            disabled={
                                loadingCurrencies
                            }
                        >
                            {loadingCurrencies ? (
                                <option>
                                    Loading...
                                </option>
                            ) : (
                                currencies.map(
                                    (currency) => (
                                        <option
                                            key={currency}
                                            value={currency}
                                        >
                                            {currency}
                                        </option>
                                    )
                                )
                            )}
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="calculate-button"
                        disabled={
                            loading ||
                            loadingCurrencies
                        }
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
                        title="Currency Result"
                        data={result}
                    />
                )}

            </div>
        </main>
    );
};

export default Currency;