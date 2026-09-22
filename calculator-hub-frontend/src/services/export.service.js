import api from "./api";

export const exportCSV = async (data) => {
    const response = await api.post(
        "/api/v1/export/csv",
        data
    );

    return response.data;
};