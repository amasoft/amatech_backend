import Router from "express";
import { app } from "../../config/Connection.js";
import authorRouter from "./AuthorsRoutes.js";
import postRouter from "./PostsRoutes.js";
import commentRouter from "./CommentsRoutes.js";
const router = Router();

router.use("/author", authorRouter);
router.use("/post", postRouter);
router.use("/comment", commentRouter);
export default router;
