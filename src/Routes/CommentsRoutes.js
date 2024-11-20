import Router from "express";
import postcontroller from "../Controllers/PostsController.js";

import { PostExist } from "../middlewares/postmiddleware.js";
import commentscontroller from "../Controllers/CommentsController.js";
const commentRouter = Router();

commentRouter.post("/", commentscontroller.createComments);
commentRouter.get("/:id", commentscontroller.fetchCommentsPostByid);
commentRouter.delete("/:id", commentscontroller.deleteComment);
// postRouter.put("/:id", PostExist, postcontroller.UpdatePost);
// postRouter.get("/", postcontroller.fetchAllPost);
export default commentRouter;
