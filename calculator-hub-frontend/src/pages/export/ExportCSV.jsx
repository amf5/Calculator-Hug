import { useState } from "react";
import api from "../../services/api";

const ExportCSV = () => {
    const [jsonData, setJsonData] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleExport = async (event) => {
        event.preventDefault();

        setError("");
        setSuccess("");

        let parsedData;

        try {
            parsedData = JSON.parse(jsonData);
        } catch {
            setError("Please enter valid JSON data.");
            return;
        }

        if (
            !parsedData ||
            typeof parsedData !== "object" ||
            Array.isArray(parsedData)
        ) {
            setError("JSON data must be an object.");
            return;
        }

        try {
            setLoading(true);

            const response = await api.post(
                "/api/v1/export/csv",
                {
                    data: parsedData
                },
                {
                    responseType: "text"
                }
            );

            let csv = response.data;

            // Handle JSON response returned by the backend
            if (typeof csv === "string") {
                try {
                    const parsedResponse = JSON.parse(csv);

                    if (
                        parsedResponse?.data &&
                        typeof parsedResponse.data === "string"
                    ) {
                        csv = parsedResponse.data;
                    } else if (
                        parsedResponse?.data?.csv &&
                        typeof parsedResponse.data.csv === "string"
                    ) {
                        csv = parsedResponse.data.csv;
                    }
                } catch {
                    // Response is already plain CSV
                }
            }

            if (
                typeof csv !== "string" ||
                !csv.trim()
            ) {
                throw new Error(
                    "Invalid CSV response."
                );
            }

            const blob = new Blob(
                [csv],
                {
                    type: "text/csv;charset=utf-8;"
                }
            );

            const url =
                window.URL.createObjectURL(blob);

            const link =
                document.createElement("a");

            link.href = url;
            link.download = "calqora-export.csv";

            document.body.appendChild(link);
            link.click();

            link.remove();

            window.URL.revokeObjectURL(url);

            setSuccess(
                "Export successful! Your CSV file has been downloaded."
            );
        } catch (error) {
            setError(
                error.response?.data?.message ||
                error.message ||
                "The server returned an invalid CSV response."
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
                        CALQORA DATA
                    </p>

                    <h1>
                        Export CSV
                    </h1>

                    <p>
                        Convert your JSON data into
                        a downloadable CSV file.
                    </p>
                </div>

                <form
                    className="calculator-form"
                    onSubmit={handleExport}
                >
                    <div className="form-group">
                        <label>
                            JSON Data
                        </label>

                        <textarea
                            value={jsonData}
                            onChange={(event) => {
                                setJsonData(
                                    event.target.value
                                );

                                setError("");
                                setSuccess("");
                            }}
                            placeholder={`{
  "name": "Ahmed",
  "age": 24,
  "job": "Backend Developer"
}`}
                            rows="10"
                        />
                    </div>

                    <button
                        type="submit"
                        className="calculate-button"
                        disabled={loading}
                    >
                        {loading
                            ? "Exporting..."
                            : "Export CSV"}
                    </button>

                    {error && (
                        <div className="error-message">
                            <strong>
                                Export Failed
                            </strong>

                            <span>
                                {error}
                            </span>
                        </div>
                    )}

                    {success && (
                        <div className="success-message">
                            <strong>
                                ✓ Export Successful
                            </strong>

                            <span>
                                {success}
                            </span>
                        </div>
                    )}
                </form>

            </div>
        </main>
    );
};

export default ExportCSV;