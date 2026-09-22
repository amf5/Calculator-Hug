import api from "./api";

// Length
export const convertLength = async (data) => {
    const response = await api.post(
        "/api/v1/conversions/length",
        data
    );

    return response.data;
};

// Weight
export const convertWeight = async (data) => {
    const response = await api.post(
        "/api/v1/conversions/weight",
        data
    );

    return response.data;
};

// Temperature
export const convertTemperature = async (data) => {
    const response = await api.post(
        "/api/v1/conversions/temperature",
        data
    );

    return response.data;
};