import express from "express";
import formidable from "express-formidable";

const router = express.Router();

import {
  isInstructor,
  requireSignin,
  isEnrolled,
} from "../middlewares/index.js";

import {
  uploadImage,
  removeImage,
  create,
  read,
  uploadVideo,
  removeVideo,
  addLesson,
  update,
  removeLesson,
  updateLesson,
  publishCourse,
  unpublishCourse,
  courses,
  checkEnrollment,
  freeEnrollment,
  paidEnrollment,
  stripeSuccess,
  userCourses,
  markCompleted,
  listCompleted,
  markIncomplete,
  createCourseReview,
} from "../controllers/course.js";

router.get("/courses", courses);

router.post("/course/upload-image", uploadImage);
router.post("/course/remove-image", removeImage);

router.post("/course", requireSignin, isInstructor, create);
router.put("/course/:slug", requireSignin, update);

router.get("/course/:slug", read);
router.post(
  "/course/video-upload/:instructorId",
  requireSignin,
  formidable(),
  uploadVideo
);
router.post("/course/:courseId/review", requireSignin, createCourseReview);
router.post("/course/video-remove/:instructorId", requireSignin, removeVideo);

router.put("/course/publish/:courseId", requireSignin, publishCourse);
router.put("/course/unpublish/:courseId", requireSignin, unpublishCourse);

router.post("/course/lesson/:slug/:instructorId", requireSignin, addLesson);
router.put("/course/lesson/:slug/:instructorId", requireSignin, updateLesson);

router.put("/course/:slug/:lessonId", requireSignin, removeLesson);

router.get("/check-enrollment/:courseId", requireSignin, checkEnrollment);

router.post("/free-enrollment/:courseId", requireSignin, freeEnrollment);
router.post("/paid-enrollment/:courseId", requireSignin, paidEnrollment);
router.get("/stripe-success/:courseId", requireSignin, stripeSuccess);

router.get("/user-courses", requireSignin, userCourses);
router.get("/user/course/:slug", requireSignin, isEnrolled, read);

router.post("/mark-completed", requireSignin, markCompleted);
router.post("/list-completed", requireSignin, listCompleted);
router.post("/mark-incomplete", requireSignin, markIncomplete);

export default router;
