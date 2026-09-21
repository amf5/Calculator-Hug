import express from "express";
import { percentageCalculator } from "../controllers/percentage.controller.js";
import {discountCalculator} from "../controllers/discount.controller.js"
import { bmiCalculator } from "../controllers/bmi.controller.js";
import { ageCalculator} from "../controllers/age.controller.js";
import { gpaCalculator} from "../controllers/gpa.controller.js";
import {salaryCalculator} from "../controllers/salary.controller.js";
import { dateDifferenceCalculator} from "../controllers/date.controller.js";
import { loanCalculator} from "../controllers/loan.controller.js";

const router = express.Router();

router.post("/percentage", percentageCalculator);
router.post("/discount", discountCalculator);
router.post( "/bmi",bmiCalculator);
router.post(  "/age", ageCalculator);
router.post("/gpa", gpaCalculator);
router.post("/salary", salaryCalculator);
router.post( "/date-difference",dateDifferenceCalculator);
router.post( "/loan", loanCalculator);


export default router;