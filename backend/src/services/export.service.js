export const objectToCSV = (
    data
) => {
    const entries =
        Object.entries(data);

    const header =
        entries
            .map(
                ([key]) => `"${key}"`
            )
            .join(",");

    const values =
        entries
            .map(
                ([, value]) =>
                    `"${String(value).replaceAll('"', '""')}"`
            )
            .join(",");

    return `${header}\n${values}`;
};