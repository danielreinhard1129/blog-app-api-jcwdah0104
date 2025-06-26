import express from "express";
import { createBlogController } from "../controllers/blog.controller";

const router = express.Router();

router.post("/", createBlogController);

export default router;
