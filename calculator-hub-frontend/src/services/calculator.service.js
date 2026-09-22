import api from "./api";

// Percentage
export const calculatePercentage = async (data) => {
    const response = await api.post(
        "/api/v1/calculators/percentage",
        data
    );

    return response.data;
};

// Discount
export const calculateDiscount = async (data) => {
    const response = await api.post(
        "/api/v1/calculators/discount",
        data
    );

    return response.data;
};

// BMI
export const calculateBMI = async (data) => {
    const response = await api.post(
        "/api/v1/calculators/bmi",
        data
    );

    return response.data;
};

// Age
export const calculateAge = async (data) => {
    const response = await api.post(
        "/api/v1/calculators/age",
        data
    );

    return response.data;
};

// GPA
export const calculateGPA = async (data) => {
    const response = await api.post(
        "/api/v1/calculators/gpa",
        data
    );

    return response.data;
};

// Salary
export const calculateSalary = async (data) => {
    const response = await api.post(
        "/api/v1/calculators/salary",
        data
    );

    return response.data;
};

// Date Difference
export const calculateDateDifference = async (data) => {
    const response = await api.post(
        "/api/v1/calculators/date-difference",
        data
    );

    return response.data;
};

// Loan
export const calculateLoan = async (data) => {
    const response = await api.post(
        "/api/v1/calculators/loan",
        data
    );

    return response.data;
};