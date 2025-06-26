import express from "express";
import {
  createBlogController,
  getBlogsController,
} from "../controllers/blog.controller";

const router = express.Router();

router.get("/", getBlogsController);
router.post("/", createBlogController);

export default router;
