import express from "express";

import {
    exportCSV
} from "../controllers/export.controller.js";

const router = express.Router();

router.post(
    "/csv",
    exportCSV
);

export default router;