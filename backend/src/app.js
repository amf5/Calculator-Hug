import express from "express";
import cors from "cors";
import helmet from "helmet";


import calculatorRoutes
    from "./routes/calculator.routes.js";

import conversionRoutes
    from "./routes/conversion.routes.js";

import statisticsRoutes
    from "./routes/statistics.routes.js";

import numberRoutes
    from "./routes/number.routes.js";

import financeRoutes
    from "./routes/finance.routes.js";

import currencyRoutes
    from "./routes/currency.routes.js";

import timeRoutes
    from "./routes/time.routes.js";

import exportRoutes
    from "./routes/export.routes.js";

import {
    apiRateLimiter
} from "./middlewares/rate-limit.middleware.js";

import {
    notFoundMiddleware
} from "./middlewares/not-found.middleware.js";

import {
    errorMiddleware
} from "./middlewares/error.middleware.js";

import {
    swaggerDocument
} from "./docs/swagger.js";

const app = express();


// Security
app.use(helmet());


// CORS
app.use(
    cors({
        origin: "*"
    })
);


// Body parser
app.use(
    express.json({
        limit: "100kb"
    })
);


// Rate limit
app.use(
    "/api",
    apiRateLimiter
);


// API routes

app.use(
    "/api/v1/calculators",
    calculatorRoutes
);

app.use(
    "/api/v1/conversions",
    conversionRoutes
);

app.use(
    "/api/v1/statistics",
    statisticsRoutes
);

app.use(
    "/api/v1/numbers",
    numberRoutes
);

app.use(
    "/api/v1/finance",
    financeRoutes
);

app.use(
    "/api/v1/currency",
    currencyRoutes
);

app.use(
    "/api/v1/time",
    timeRoutes
);

app.use(
    "/api/v1/export",
    exportRoutes
);


// Health check

app.get(
    "/api/v1/health",
    (req, res) => {
        res.status(200).json({
            success: true,

            message:
                "Calculator Hub API is running",

            environment:
                process.env.NODE_ENV,

            uptime:
                process.uptime(),

            timestamp:
                new Date().toISOString()
        });
    }
);


// API documentation




// 404

app.use(
    notFoundMiddleware
);


// Error handler

app.use(
    errorMiddleware
);

export default app;