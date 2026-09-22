import api from "./api";

export const calculateStatistics = async (data) => {
    const response = await api.post(
        "/api/v1/statistics",
        data
    );

    return response.data;
};