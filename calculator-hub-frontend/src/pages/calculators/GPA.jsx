import { useState } from "react";

import AdSlot from "../../components/ads/AdSlot";
import ResultCard from "../../components/common/ResultCard";

import { calculateGPA } from "../../services/calculator.service";


const GPA = () => {

    const [subjects, setSubjects] = useState([
        {
            name: "",
            creditHours: "",
            gradePoint: ""
        }
    ]);

    const [result, setResult] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);


    const updateSubject = (
        index,
        field,
        value
    ) => {

        setSubjects((previous) =>
            previous.map((subject, i) =>
                i === index
                    ? {
                        ...subject,
                        [field]: value
                    }
                    : subject
            )
        );

        setError("");
        setResult(null);
    };


    const addSubject = () => {

        setSubjects((previous) => [
            ...previous,
            {
                name: "",
                creditHours: "",
                gradePoint: ""
            }
        ]);

        setError("");
        setResult(null);
    };


    const removeSubject = (index) => {

        if (subjects.length === 1) {
            return;
        }

        setSubjects((previous) =>
            previous.filter(
                (_, i) => i !== index
            )
        );

        setError("");
        setResult(null);
    };


    const handleSubmit = async (event) => {

        event.preventDefault();

        setError("");
        setResult(null);


        // Validate subjects

        for (const subject of subjects) {

            if (!subject.name.trim()) {
                setError(
                    "Please enter a subject name."
                );
                return;
            }


            if (
                subject.creditHours === "" ||
                Number(subject.creditHours) <= 0
            ) {
                setError(
                    "Credit hours must be greater than 0."
                );
                return;
            }


            if (
                subject.gradePoint === "" ||
                Number(subject.gradePoint) < 0
            ) {
                setError(
                    "Grade point must be a valid number."
                );
                return;
            }

        }


        try {

            setLoading(true);


            const payload = {
                subjects: subjects.map(
                    (subject) => ({
                        name: subject.name.trim(),

                        creditHours:
                            Number(
                                subject.creditHours
                            ),

                        gradePoint:
                            Number(
                                subject.gradePoint
                            )
                    })
                )
            };


            console.log(
                "GPA Request:",
                payload
            );


            const response =
                await calculateGPA(payload);


            console.log(
                "GPA Response:",
                response
            );


            setResult(
                response.data
            );

        } catch (error) {

            console.error(
                "GPA Error:",
                error
            );


            setError(
                error.response?.data?.message ||
                error.message ||
                "Unable to calculate GPA."
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
                        EDUCATION
                    </span>

                    <h1>
                        GPA Calculator
                    </h1>

                    <p>
                        Calculate your grade point
                        average.
                    </p>

                </div>


                <AdSlot position="top" />


                <div className="calculator-box">

                    <form
                        onSubmit={handleSubmit}
                    >

                        {subjects.map(
                            (subject, index) => (

                                <div
                                    className="subject-row"
                                    key={index}
                                >

                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        value={
                                            subject.name
                                        }
                                        onChange={(event) =>
                                            updateSubject(
                                                index,
                                                "name",
                                                event.target.value
                                            )
                                        }
                                        required
                                    />


                                    <input
                                        type="number"
                                        step="0.1"
                                        min="0"
                                        placeholder="Credit Hours"
                                        value={
                                            subject.creditHours
                                        }
                                        onChange={(event) =>
                                            updateSubject(
                                                index,
                                                "creditHours",
                                                event.target.value
                                            )
                                        }
                                        required
                                    />


                                    <input
                                        type="number"
                                        step="0.1"
                                        min="0"
                                        placeholder="Grade Point"
                                        value={
                                            subject.gradePoint
                                        }
                                        onChange={(event) =>
                                            updateSubject(
                                                index,
                                                "gradePoint",
                                                event.target.value
                                            )
                                        }
                                        required
                                    />


                                    <button
                                        type="button"
                                        className="remove-button"
                                        onClick={() =>
                                            removeSubject(index)
                                        }
                                        disabled={
                                            subjects.length === 1
                                        }
                                    >
                                        ×
                                    </button>

                                </div>

                            )
                        )}


                        <div className="form-actions">

                            <button
                                type="button"
                                className="secondary-button"
                                onClick={addSubject}
                                disabled={loading}
                            >
                                + Add Subject
                            </button>


                            <button
                                type="submit"
                                className="primary-button"
                                disabled={loading}
                            >
                                {loading
                                    ? "Calculating..."
                                    : "Calculate GPA"}
                            </button>

                        </div>

                    </form>


                    {error && (

                        <div className="error-message">
                            {error}
                        </div>

                    )}


                    {result && !loading && (

                        <ResultCard
                            title="Your GPA"
                            data={result}
                        />

                    )}

                </div>


                <AdSlot position="middle" />

            </div>

        </main>

    );

};


export default GPA;