import api from "./api";

// Factorial
export const calculateFactorial = async (data) => {
    const response = await api.post(
        "/api/v1/numbers/factorial",
        data
    );

    return response.data;
};

// Prime
export const checkPrime = async (data) => {
    const response = await api.post(
        "/api/v1/numbers/prime",
        data
    );

    return response.data;
};

// GCD
export const calculateGCD = async (data) => {
    const response = await api.post(
        "/api/v1/numbers/gcd",
        data
    );

    return response.data;
};

// LCM
export const calculateLCM = async (data) => {
    const response = await api.post(
        "/api/v1/numbers/lcm",
        data
    );

    return response.data;
};