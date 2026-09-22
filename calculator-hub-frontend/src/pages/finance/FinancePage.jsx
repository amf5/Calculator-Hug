import { useState } from "react";
import api from "../../services/api";
import ResultCard from "../../components/common/ResultCard";

const FinancePage = ({ type = "simple-interest" }) => {
    const [form, setForm] = useState({
        principal: "",
        rate: "",
        years: "",
        compoundsPerYear: "",
        bill: "",
        tipPercentage: "",
        investment: "",
        returnAmount: ""
    });

    const [result, setResult] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const updateField = (name, value) => {
        setForm((previous) => ({
            ...previous,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setError("");
        setResult(null);

        try {
            setLoading(true);

            let endpoint;
            let body;

            if (type === "simple-interest") {
                endpoint =
                    "/api/v1/finance/simple-interest";

                body = {
                    principal: Number(form.principal),
                    rate: Number(form.rate),
                    years: Number(form.years)
                };
            }

            else if (type === "compound-interest") {
                endpoint =
                    "/api/v1/finance/compound-interest";

                body = {
                    principal: Number(form.principal),
                    rate: Number(form.rate),
                    years: Number(form.years),
                    compoundsPerYear:
                        Number(form.compoundsPerYear)
                };
            }

            else if (type === "tip") {
                endpoint =
                    "/api/v1/finance/tip";

                body = {
                    bill: Number(form.bill),
                    tipPercentage:
                        Number(form.tipPercentage)
                };
            }

            else if (type === "roi") {
                endpoint =
                    "/api/v1/finance/roi";

                body = {
                    investment:
                        Number(form.investment),
                    returnAmount:
                        Number(form.returnAmount)
                };
            }

            const response = await api.post(
                endpoint,
                body
            );

            setResult(response.data.data);

        } catch (error) {
            setError(
                error.response?.data?.message ||
                "Something went wrong."
            );
        } finally {
            setLoading(false);
        }
    };

    const renderFields = () => {

        if (
            type === "simple-interest" ||
            type === "compound-interest"
        ) {
            return (
                <>
                    <div className="form-group">
                        <label>
                            Principal
                        </label>

                        <input
                            type="number"
                            step="any"
                            value={form.principal}
                            onChange={(event) =>
                                updateField(
                                    "principal",
                                    event.target.value
                                )
                            }
                            placeholder="10000"
                        />
                    </div>

                    <div className="form-group">
                        <label>
                            Annual Interest Rate (%)
                        </label>

                        <input
                            type="number"
                            step="any"
                            value={form.rate}
                            onChange={(event) =>
                                updateField(
                                    "rate",
                                    event.target.value
                                )
                            }
                            placeholder="10"
                        />
                    </div>

                    <div className="form-group">
                        <label>
                            Time (Years)
                        </label>

                        <input
                            type="number"
                            min="0"
                            step="any"
                            value={form.years}
                            onChange={(event) =>
                                updateField(
                                    "years",
                                    event.target.value
                                )
                            }
                            placeholder="2"
                        />
                    </div>

                    {type === "compound-interest" && (
                        <div className="form-group">
                            <label>
                                Compounds Per Year
                            </label>

                            <input
                                type="number"
                                min="1"
                                step="1"
                                value={
                                    form.compoundsPerYear
                                }
                                onChange={(event) =>
                                    updateField(
                                        "compoundsPerYear",
                                        event.target.value
                                    )
                                }
                                placeholder="4"
                            />
                        </div>
                    )}
                </>
            );
        }

        if (type === "tip") {
            return (
                <>
                    <div className="form-group">
                        <label>
                            Bill
                        </label>

                        <input
                            type="number"
                            step="any"
                            value={form.bill}
                            onChange={(event) =>
                                updateField(
                                    "bill",
                                    event.target.value
                                )
                            }
                            placeholder="500"
                        />
                    </div>

                    <div className="form-group">
                        <label>
                            Tip Percentage (%)
                        </label>

                        <input
                            type="number"
                            step="any"
                            value={
                                form.tipPercentage
                            }
                            onChange={(event) =>
                                updateField(
                                    "tipPercentage",
                                    event.target.value
                                )
                            }
                            placeholder="10"
                        />
                    </div>
                </>
            );
        }

        if (type === "roi") {
            return (
                <>
                    <div className="form-group">
                        <label>
                            Investment
                        </label>

                        <input
                            type="number"
                            step="any"
                            value={form.investment}
                            onChange={(event) =>
                                updateField(
                                    "investment",
                                    event.target.value
                                )
                            }
                            placeholder="10000"
                        />
                    </div>

                    <div className="form-group">
                        <label>
                            Return Amount
                        </label>

                        <input
                            type="number"
                            step="any"
                            value={
                                form.returnAmount
                            }
                            onChange={(event) =>
                                updateField(
                                    "returnAmount",
                                    event.target.value
                                )
                            }
                            placeholder="13000"
                        />
                    </div>
                </>
            );
        }

        return null;
    };

    const titles = {
        "simple-interest":
            "Simple Interest Calculator",

        "compound-interest":
            "Compound Interest Calculator",

        tip:
            "Tip Calculator",

        roi:
            "ROI Calculator"
    };

    return (
        <main className="calculator-page">

            <div className="container calculator-container">

                <div className="calculator-header">

                    <p className="eyebrow">
                        FINANCE
                    </p>

                    <h1>
                        {titles[type]}
                    </h1>

                    <p>
                        Calculate financial values
                        quickly and accurately.
                    </p>

                </div>

                <form
                    className="calculator-form"
                    onSubmit={handleSubmit}
                >

                    {renderFields()}

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

export default FinancePage;