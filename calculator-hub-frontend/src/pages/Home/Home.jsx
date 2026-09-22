import { Link } from "react-router-dom";

import AdSlot from "../../components/ads/AdSlot";

const toolSections = [
    {
        title: "Calculators",
        description: "Useful calculators for everyday needs.",
        tools: [
            {
                title: "Percentage Calculator",
                description:
                    "Calculate percentages quickly and easily.",
                path: "/calculators/percentage",
                badge: "Calculator"
            },
            {
                title: "Discount Calculator",
                description:
                    "Calculate discounts and final prices.",
                path: "/calculators/discount",
                badge: "Calculator"
            },
            {
                title: "BMI Calculator",
                description:
                    "Calculate your body mass index.",
                path: "/calculators/bmi",
                badge: "Health"
            },
            {
                title: "Age Calculator",
                description:
                    "Calculate your exact age.",
                path: "/calculators/age",
                badge: "Date"
            },
            {
                title: "GPA Calculator",
                description:
                    "Calculate your grade point average.",
                path: "/calculators/gpa",
                badge: "Education"
            },
            {
                title: "Salary Calculator",
                description:
                    "Calculate your net salary.",
                path: "/calculators/salary",
                badge: "Finance"
            },
            {
                title: "Date Difference",
                description:
                    "Calculate the difference between two dates.",
                path: "/calculators/date-difference",
                badge: "Date"
            },
            {
                title: "Loan Calculator",
                description:
                    "Calculate monthly loan payments.",
                path: "/calculators/loan",
                badge: "Finance"
            }
        ]
    },

    {
        title: "Conversions",
        description:
            "Convert values between different units.",
        tools: [
            {
                title: "Length Converter",
                description:
                    "Convert between length units.",
                path: "/conversions/length",
                badge: "Conversion"
            },
            {
                title: "Weight Converter",
                description:
                    "Convert between weight units.",
                path: "/conversions/weight",
                badge: "Conversion"
            },
            {
                title: "Temperature Converter",
                description:
                    "Convert Celsius, Fahrenheit and Kelvin.",
                path: "/conversions/temperature",
                badge: "Conversion"
            }
        ]
    },

    {
        title: "Statistics",
        description:
            "Analyze numbers and calculate statistical values.",
        tools: [
            {
                title: "Statistics Calculator",
                description:
                    "Calculate statistical values from a list of numbers.",
                path: "/statistics",
                badge: "Statistics"
            }
        ]
    },

    {
        title: "Numbers",
        description:
            "Perform useful mathematical operations with numbers.",
        tools: [
            {
                title: "Factorial Calculator",
                description:
                    "Calculate the factorial of a number.",
                path: "/numbers/factorial",
                badge: "Numbers"
            },
            {
                title: "Prime Number Checker",
                description:
                    "Check whether a number is prime.",
                path: "/numbers/prime",
                badge: "Numbers"
            },
            {
                title: "GCD Calculator",
                description:
                    "Calculate the greatest common divisor.",
                path: "/numbers/gcd",
                badge: "Numbers"
            },
            {
                title: "LCM Calculator",
                description:
                    "Calculate the least common multiple.",
                path: "/numbers/lcm",
                badge: "Numbers"
            }
        ]
    },

    {
        title: "Finance",
        description:
            "Calculate common financial values.",
        tools: [
            {
                title: "Simple Interest",
                description:
                    "Calculate simple interest.",
                path: "/finance/simple-interest",
                badge: "Finance"
            },
            {
                title: "Compound Interest",
                description:
                    "Calculate compound interest.",
                path: "/finance/compound-interest",
                badge: "Finance"
            },
            {
                title: "Tip Calculator",
                description:
                    "Calculate tips and total bills.",
                path: "/finance/tip",
                badge: "Finance"
            },
            {
                title: "ROI Calculator",
                description:
                    "Calculate return on investment.",
                path: "/finance/roi",
                badge: "Finance"
            }
        ]
    },

    {
        title: "Currency",
        description:
            "Convert currencies using exchange rates.",
        tools: [
            {
                title: "Currency Converter",
                description:
                    "Convert between different currencies.",
                path: "/currency",
                badge: "Currency"
            }
        ]
    },

    {
        title: "Time Zones",
        description:
            "Check the current time in different locations.",
        tools: [
            {
                title: "World Time",
                description:
                    "Get the current time for different time zones.",
                path: "/time",
                badge: "Time"
            }
        ]
    },

    {
        title: "Export",
        description:
            "Export your data into useful formats.",
        tools: [
            {
                title: "Export CSV",
                description:
                    "Convert JSON data into a downloadable CSV file.",
                path: "/export",
                badge: "Export"
            }
        ]
    }
];

const Home = () => {
    return (
        <main>

            {/* =========================
                HERO
            ========================= */}

            <section className="hero">
                <div className="container">

                    <p className="eyebrow">
                        SMART ONLINE TOOLS
                    </p>

                    <h1>
                        Everyday calculations,
                        made simple.
                    </h1>

                    <p>
                        Calculate, convert and analyze
                        numbers quickly with Calqora.
                    </p>

                    <div className="hero-actions">

                        <Link
                            to="/calculators"
                            className="primary-button"
                        >
                            Explore Calculators
                        </Link>

                        <Link
                            to="/conversions"
                            className="secondary-button"
                        >
                            Conversions
                        </Link>

                    </div>

                </div>
            </section>


            {/* =========================
                TOP AD
            ========================= */}

            <AdSlot position="top" />


            {/* =========================
                ALL TOOLS
            ========================= */}

            <section className="container tools-container">

                {toolSections.map((section) => (
                    <section
                        key={section.title}
                        className="tool-section"
                    >

                        <div className="section-header">

                            <p className="eyebrow">
                                TOOLS
                            </p>

                            <h2>
                                {section.title}
                            </h2>

                            <p>
                                {section.description}
                            </p>

                        </div>


                        <div className="calculator-grid">

                            {section.tools.map((tool) => (
                                <Link
                                    key={tool.path}
                                    to={tool.path}
                                    className="calculator-card"
                                >

                                    <span className="tool-badge">
                                        {tool.badge}
                                    </span>

                                    <h3>
                                        {tool.title}
                                    </h3>

                                    <p>
                                        {tool.description}
                                    </p>

                                    <span className="tool-link">
                                        Open Tool →
                                    </span>

                                </Link>
                            ))}

                        </div>

                    </section>
                ))}

            </section>


            {/* =========================
                MIDDLE AD
            ========================= */}

            <AdSlot position="middle" />

        </main>
    );
};

export default Home;