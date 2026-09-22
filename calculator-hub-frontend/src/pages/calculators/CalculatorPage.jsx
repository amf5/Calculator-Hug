import { useState } from "react";

import AdSlot from "../../components/ads/AdSlot";
import ResultCard from "../../components/common/ResultCard";
import Loader from "../../components/common/Loader";

const CalculatorPage = ({
    title,
    description,
    fields,
    calculate
}) => {
    const [values, setValues] = useState({});
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (name, value) => {
        setValues((previous) => ({
            ...previous,
            [name]: value
        }));

        setError("");
        setResult(null);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setError("");
        setResult(null);

        try {
            setLoading(true);

            const payload = {};

            fields.forEach((field) => {
                if (field.type === "number") {
                    payload[field.name] =
                        Number(values[field.name]);
                } else {
                    payload[field.name] =
                        values[field.name];
                }
            });

            console.log(
                "Calculator Payload:",
                payload
            );

            const response = await calculate(payload);

            console.log(
                "Calculator Response:",
                response
            );

            setResult(response.data);

        } catch (error) {
            console.error(
                "Calculator Error:",
                error
            );

            setError(
                error.response?.data?.message ||
                error.message ||
                "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="calculator-page">

            <div className="container">

                <div className="calculator-header">

                    <span className="eyebrow">
                        CALCULATOR
                    </span>

                    <h1>
                        {title}
                    </h1>

                    <p>
                        {description}
                    </p>

                </div>

                <AdSlot position="top" />

                <div className="calculator-box">

                    <form onSubmit={handleSubmit}>

                        {fields.map((field) => (
                            <div
                                className="form-group"
                                key={field.name}
                            >

                                <label>
                                    {field.label}
                                </label>

                                <input
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    value={
                                        values[field.name] ?? ""
                                    }
                                    onChange={(event) =>
                                        handleChange(
                                            field.name,
                                            event.target.value
                                        )
                                    }
                                    required
                                />

                            </div>
                        ))}

                        <button
                            type="submit"
                            className="primary-button full"
                            disabled={loading}
                        >
                            {loading
                                ? "Calculating..."
                                : "Calculate"}
                        </button>

                    </form>

                    {loading && <Loader />}

                    {error && (
                        <div className="error-message">
                            {error}
                        </div>
                    )}

                    {result && !loading && (
                        <ResultCard
                            title="Calculation Result"
                            data={result}
                        />
                    )}

                </div>

                <AdSlot position="middle" />

                <article className="content-card">

                    <h2>
                        How does {title} work?
                    </h2>

                    <p>
                        Enter the required values above
                        and Calqora will calculate the
                        result instantly.
                    </p>

                </article>

            </div>

        </main>
    );
};

export default CalculatorPage;