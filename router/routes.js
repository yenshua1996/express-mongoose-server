import express from "express";
import {
  getBlogs,
  createBlog,
  deleteBlog,
  updateBlog,
} from "./routeHandler.js";

const router = express.Router();

router.get("/blogs", getBlogs);

router.post("/blog", createBlog);

router.delete("/blog/:id", deleteBlog);

router.patch("/blog/:id", updateBlog);

export default router;
