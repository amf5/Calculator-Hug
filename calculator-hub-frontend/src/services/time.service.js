import api from "./api";

export const getTimeByTimezone = async (timezone) => {
    const response = await api.get(
        `/api/v1/time/${timezone}`
    );

    return response.data;
};