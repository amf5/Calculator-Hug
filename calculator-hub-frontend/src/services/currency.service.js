import api from "./api";

// Available currencies
export const getCurrencies = async () => {
    const response = await api.get(
        "/api/v1/currency/currencies"
    );

    return response.data;
};

// Currency rates
export const getRates = async (base = "USD") => {
    const response = await api.get(
        "/api/v1/currency/rates",
        {
            params: {
                base
            }
        }
    );

    return response.data;
};

// Currency conversion
export const convertCurrency = async (data) => {
    const response = await api.post(
        "/api/v1/currency/convert",
        data
    );

    return response.data;
};