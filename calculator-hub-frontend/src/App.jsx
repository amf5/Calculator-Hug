import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/common/ScrollToTop";

import Home from "./pages/Home/Home";
import Calculators from "./pages/calculators/Calculators";
import CalculatorPage from "./pages/calculators/CalculatorPage";
import GPA from "./pages/calculators/GPA";

import ConversionPage from "./pages/conversions/ConversionPage";

import FinancePage from "./pages/finance/FinancePage";

import Statistics from "./pages/statistics/Statistics";

import NumberPage from "./pages/numbers/NumberPage";

import Currency from "./pages/currency/Currency";

import Time from "./pages/time/Time";

import ExportCSV from "./pages/export/ExportCSV";

import About from "./pages/legal/About";
import Contact from "./pages/legal/Contact";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import Terms from "./pages/legal/Terms";

import {
    calculatePercentage,
    calculateDiscount,
    calculateBMI,
    calculateAge,
    calculateSalary,
    calculateDateDifference,
    calculateLoan
} from "./services/calculator.service";


const App = () => {
    return (
        <BrowserRouter>

            <ScrollToTop />

            <Navbar />

            <Routes>

                {/* =========================
                    HOME
                ========================= */}

                <Route
                    path="/"
                    element={<Home />}
                />


                {/* =========================
                    CALCULATORS
                ========================= */}

                <Route
                    path="/calculators"
                    element={<Calculators />}
                />


                {/* Percentage */}

                <Route
                    path="/calculators/percentage"
                    element={
                        <CalculatorPage
                            title="Percentage Calculator"
                            description="Calculate percentages quickly and easily."
                            fields={[
                                {
                                    name: "value",
                                    label: "Value",
                                    type: "number",
                                    placeholder: "500"
                                },
                                {
                                    name: "percentage",
                                    label: "Percentage",
                                    type: "number",
                                    placeholder: "20"
                                }
                            ]}
                            calculate={calculatePercentage}
                        />
                    }
                />


                {/* Discount */}

                <Route
                    path="/calculators/discount"
                    element={
                        <CalculatorPage
                            title="Discount Calculator"
                            description="Calculate discounts and final prices."
                            fields={[
                                {
                                    name: "price",
                                    label: "Original Price",
                                    type: "number",
                                    placeholder: "1000"
                                },
                                {
                                    name: "discountPercentage",
                                    label: "Discount Percentage",
                                    type: "number",
                                    placeholder: "15"
                                }
                            ]}
                            calculate={calculateDiscount}
                        />
                    }
                />


                {/* BMI */}

                <Route
                    path="/calculators/bmi"
                    element={
                        <CalculatorPage
                            title="BMI Calculator"
                            description="Calculate your body mass index."
                            fields={[
                                {
                                    name: "weight",
                                    label: "Weight (kg)",
                                    type: "number",
                                    placeholder: "70"
                                },
                                {
                                    name: "height",
                                    label: "Height (cm)",
                                    type: "number",
                                    placeholder: "175"
                                }
                            ]}
                            calculate={calculateBMI}
                        />
                    }
                />


                {/* Age */}

                <Route
                    path="/calculators/age"
                    element={
                        <CalculatorPage
                            title="Age Calculator"
                            description="Calculate your exact age."
                            fields={[
                                {
                                    name: "birthDate",
                                    label: "Birth Date",
                                    type: "date"
                                }
                            ]}
                            calculate={calculateAge}
                        />
                    }
                />


                {/* GPA */}

                <Route
                    path="/calculators/gpa"
                    element={<GPA />}
                />


                {/* Salary */}

                <Route
                    path="/calculators/salary"
                    element={
                        <CalculatorPage
                            title="Salary Calculator"
                            description="Calculate your net salary."
                            fields={[
                                {
                                    name: "grossSalary",
                                    label: "Gross Salary",
                                    type: "number",
                                    placeholder: "15000"
                                },
                                {
                                    name: "deductionsPercentage",
                                    label: "Deductions Percentage",
                                    type: "number",
                                    placeholder: "10"
                                }
                            ]}
                            calculate={calculateSalary}
                        />
                    }
                />


                {/* Date Difference */}

                <Route
                    path="/calculators/date-difference"
                    element={
                        <CalculatorPage
                            title="Date Difference"
                            description="Calculate the difference between two dates."
                            fields={[
                                {
                                    name: "startDate",
                                    label: "Start Date",
                                    type: "date"
                                },
                                {
                                    name: "endDate",
                                    label: "End Date",
                                    type: "date"
                                }
                            ]}
                            calculate={calculateDateDifference}
                        />
                    }
                />


                {/* Loan */}

                <Route
                    path="/calculators/loan"
                    element={
                        <CalculatorPage
                            title="Loan Calculator"
                            description="Calculate monthly loan payments."
                            fields={[
                                {
                                    name: "principal",
                                    label: "Principal",
                                    type: "number",
                                    placeholder: "100000"
                                },
                                {
                                    name: "annualInterestRate",
                                    label: "Annual Interest Rate",
                                    type: "number",
                                    placeholder: "12"
                                },
                                {
                                    name: "months",
                                    label: "Months",
                                    type: "number",
                                    placeholder: "24"
                                }
                            ]}
                            calculate={calculateLoan}
                        />
                    }
                />


                {/* =========================
                    CONVERSIONS
                ========================= */}

                <Route
                    path="/conversions"
                    element={
                        <ConversionPage
                            type="length"
                        />
                    }
                />

                <Route
                    path="/conversions/length"
                    element={
                        <ConversionPage
                            type="length"
                        />
                    }
                />

                <Route
                    path="/conversions/weight"
                    element={
                        <ConversionPage
                            type="weight"
                        />
                    }
                />

                <Route
                    path="/conversions/temperature"
                    element={
                        <ConversionPage
                            type="temperature"
                        />
                    }
                />


                {/* =========================
                    STATISTICS
                ========================= */}

                <Route
                    path="/statistics"
                    element={<Statistics />}
                />


                {/* =========================
                    NUMBERS
                ========================= */}

                <Route
                    path="/numbers/factorial"
                    element={
                        <NumberPage
                            type="factorial"
                        />
                    }
                />

                <Route
                    path="/numbers/prime"
                    element={
                        <NumberPage
                            type="prime"
                        />
                    }
                />

                <Route
                    path="/numbers/gcd"
                    element={
                        <NumberPage
                            type="gcd"
                        />
                    }
                />

                <Route
                    path="/numbers/lcm"
                    element={
                        <NumberPage
                            type="lcm"
                        />
                    }
                />


                {/* =========================
                    FINANCE
                ========================= */}

                <Route
                    path="/finance"
                    element={
                        <FinancePage
                            type="simple-interest"
                        />
                    }
                />

                <Route
                    path="/finance/simple-interest"
                    element={
                        <FinancePage
                            type="simple-interest"
                        />
                    }
                />

                <Route
                    path="/finance/compound-interest"
                    element={
                        <FinancePage
                            type="compound-interest"
                        />
                    }
                />

                <Route
                    path="/finance/tip"
                    element={
                        <FinancePage
                            type="tip"
                        />
                    }
                />

                <Route
                    path="/finance/roi"
                    element={
                        <FinancePage
                            type="roi"
                        />
                    }
                />


                {/* =========================
                    CURRENCY
                ========================= */}

                <Route
                    path="/currency"
                    element={<Currency />}
                />


                {/* =========================
                    TIME ZONES
                ========================= */}

                <Route
                    path="/time"
                    element={<Time />}
                />


                {/* =========================
                    EXPORT CSV
                ========================= */}

                <Route
                    path="/export"
                    element={<ExportCSV />}
                />


                {/* =========================
                    LEGAL & INFORMATION
                ========================= */}

                <Route
                    path="/about"
                    element={<About />}
                />

                <Route
                    path="/contact"
                    element={<Contact />}
                />

                <Route
                    path="/privacy"
                    element={<PrivacyPolicy />}
                />

                <Route
                    path="/terms"
                    element={<Terms />}
                />


                {/* =========================
                    404
                ========================= */}

                <Route
                    path="*"
                    element={
                        <main className="not-found container">
                            <h1>404</h1>

                            <p>
                                Page not found.
                            </p>
                        </main>
                    }
                />

            </Routes>

            <Footer />

        </BrowserRouter>
    );
};

export default App;