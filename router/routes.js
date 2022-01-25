import express from "express";
import {
  getBlogs,
  createBlog,
  deleteBlog,
  updateBlog,
  testError,
  errorMiddleware,
  createComment,
  getComments,
} from "./routeHandler.js";

const router = express.Router();

router.get("/blogs", getBlogs);

router.post("/blog", createBlog);

router.delete("/blog/:id", deleteBlog);

router.patch("/blog/:id", updateBlog);

router.get("/comments", getComments);

router.post("/blog/:id/comment", createComment);

router.get("/error", testError);

router.use(errorMiddleware);

export default router;
