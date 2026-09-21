export const errorMiddleware = (
    error,
    req,
    res,
    next
) => {
    console.error(
        `[ERROR] ${req.method} ${req.originalUrl}`,
        error
    );

    const statusCode =
        error.statusCode || 500;

    const message =
        error.isOperational
            ? error.message
            : "Internal server error";

    return res.status(statusCode).json({
        success: false,
        message,
        ...(process.env.NODE_ENV === "development" && {
            stack: error.stack
        })
    });
};