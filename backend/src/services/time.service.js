export const getTimeByTimezone = (timezone) => {
    const date = new Date();

    const formatter = new Intl.DateTimeFormat(
        "en-US",
        {
            timeZone: timezone,
            dateStyle: "full",
            timeStyle: "long"
        }
    );

    return {
        timezone,
        time: formatter.format(date)
    };
};