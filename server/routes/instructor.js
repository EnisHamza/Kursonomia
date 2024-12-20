import express from "express";

const router = express.Router();

import { requireSignin } from "../middlewares/index.js";

import {
  makeInstructor,
  getAccountStatus,
  currentInstructor,
  instructorCourse,
  studentCount,
  instructorBalance,
  instructorPayoutSettings,
} from "../controllers/instructor.js";

router.post("/make-instructor", requireSignin, makeInstructor);
router.post("/get-account-status", requireSignin, getAccountStatus);
router.get("/current-instructor", requireSignin, currentInstructor);

router.get("/instructor-course", requireSignin, instructorCourse);

router.post("/instructor/student-count", requireSignin, studentCount);

router.get("/instructor/balance", requireSignin, instructorBalance);
router.get(
  "/instructor/payout-settings",
  requireSignin,
  instructorPayoutSettings
);

export default router;
