const ResultCard = ({
    title = "Result",
    data
}) => {

    if (!data) {
        return null;
    }

    const entries = Object.entries(data);

    return (
        <div className="result-card">

            <div className="result-card-header">

                <span className="result-badge">
                    CALCULATION RESULT
                </span>

                <h2>
                    {title}
                </h2>

            </div>


            <div className="result-list">

                {entries.map(([key, value]) => (

                    <div
                        className="result-row"
                        key={key}
                    >

                        <span className="result-label">
                            {formatLabel(key)}
                        </span>


                        <span className="result-value">

                            {key.toLowerCase() === "subjects"
                                ? (
                                    <div className="subjects-result-list">

                                        {Array.isArray(value) &&
                                            value.map(
                                                (subject, index) => (

                                                    <div
                                                        className="subject-result-item"
                                                        key={index}
                                                    >

                                                        <div className="subject-result-name">
                                                            {subject.name}
                                                        </div>


                                                        <div className="subject-result-details">

                                                            <div>
                                                                <small>
                                                                    Credit Hours
                                                                </small>

                                                                <strong>
                                                                    {subject.creditHours}
                                                                </strong>
                                                            </div>


                                                            <div>
                                                                <small>
                                                                    Grade Point
                                                                </small>

                                                                <strong>
                                                                    {subject.gradePoint}
                                                                </strong>
                                                            </div>

                                                        </div>

                                                    </div>

                                                )
                                            )}

                                    </div>
                                )
                                : formatValue(value, key)
                            }

                        </span>

                    </div>

                ))}

            </div>

        </div>
    );
};


const formatLabel = (key) => {

    return key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (char) =>
            char.toUpperCase()
        );

};


const formatValue = (
    value,
    key = ""
) => {

    if (
        key.toLowerCase() === "mode"
    ) {
        return formatMode(value);
    }


    if (typeof value === "number") {

        return Number.isInteger(value)
            ? value.toLocaleString()
            : value.toLocaleString(
                undefined,
                {
                    maximumFractionDigits: 4
                }
            );

    }


    if (typeof value === "boolean") {
        return value ? "Yes" : "No";
    }


    if (
        value === null ||
        value === undefined
    ) {
        return "-";
    }


    if (Array.isArray(value)) {

        return value
            .map((item) =>
                formatValue(item)
            )
            .join(", ");

    }


    if (typeof value === "object") {

        return Object.entries(value)
            .map(
                ([key, value]) =>
                    `${formatLabel(key)}: ${formatValue(value)}`
            )
            .join(" • ");

    }


    return String(value);
};


const formatMode = (value) => {

    if (Array.isArray(value)) {
        return value.join(", ");
    }


    if (
        value &&
        typeof value === "object"
    ) {
        return Object.values(value).join(", ");
    }


    return String(value);
};


export default ResultCard;