import api from "./api";

// Simple Interest
export const calculateSimpleInterest = async (data) => {
    const response = await api.post(
        "/api/v1/finance/simple-interest",
        data
    );

    return response.data;
};

// Compound Interest
export const calculateCompoundInterest = async (data) => {
    const response = await api.post(
        "/api/v1/finance/compound-interest",
        data
    );

    return response.data;
};

// Tip
export const calculateTip = async (data) => {
    const response = await api.post(
        "/api/v1/finance/tip",
        data
    );

    return response.data;
};

// ROI
export const calculateROI = async (data) => {
    const response = await api.post(
        "/api/v1/finance/roi",
        data
    );

    return response.data;
};