import { Link } from "react-router-dom";

const calculators = [
    {
        title: "Percentage Calculator",
        description: "Calculate percentages quickly and easily.",
        path: "/calculators/percentage"
    },
    {
        title: "Discount Calculator",
        description: "Calculate discounts and final prices.",
        path: "/calculators/discount"
    },
    {
        title: "BMI Calculator",
        description: "Calculate your body mass index.",
        path: "/calculators/bmi"
    },
    {
        title: "Age Calculator",
        description: "Calculate your exact age.",
        path: "/calculators/age"
    },
    {
        title: "GPA Calculator",
        description: "Calculate your GPA based on your subjects.",
        path: "/calculators/gpa"
    },
    {
        title: "Salary Calculator",
        description: "Calculate your net salary.",
        path: "/calculators/salary"
    },
    {
        title: "Date Difference",
        description: "Calculate the difference between two dates.",
        path: "/calculators/date-difference"
    },
    {
        title: "Loan Calculator",
        description: "Calculate monthly payments and total interest.",
        path: "/calculators/loan"
    }
];

const Calculators = () => {
    return (
        <main className="listing-page">
            <div className="container">

                <div className="listing-header">
                    <p className="eyebrow">
                        CALQORA TOOLS
                    </p>

                    <h1>
                        Calculators
                    </h1>

                    <p>
                        Simple and powerful calculators
                        for everyday needs.
                    </p>
                </div>

                <div className="calculator-grid">
                    {calculators.map((calculator) => (
                        <Link
                            key={calculator.path}
                            to={calculator.path}
                            className="calculator-card"
                        >
                            <h2>
                                {calculator.title}
                            </h2>

                            <p>
                                {calculator.description}
                            </p>

                            <span>
                                Open Calculator →
                            </span>
                        </Link>
                    ))}
                </div>

            </div>
        </main>
    );
};

export default Calculators;