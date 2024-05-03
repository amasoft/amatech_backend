import Post from "../Models/Posts.js";
import Joi from "joi";
import { display } from "../util/display.js";
export const PostExist = async (req, res, next) => {
  display(9, req.params.id);
  const id = req.params.id;
  const post = await Post.findOne({ _id: id });
  if (post) {
    req.postID = id;
    next();
    return;
  }
  return res.status(200).json({
    message: "there is no post",
  });
};
