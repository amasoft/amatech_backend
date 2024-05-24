import Posts from "../Models/Posts.js";
import { display } from "../util/display.js";

import Comments from "../Models/Comments.js";

export default class commentscontroller {
  static async createComments(req, res) {
    try {
      const comments = await Comments.create(req.body);
      if (!comments)
        return res.status(409).json({
          message: "Error creating Post",
        });

      res.status(201).json({
        message: "comments  Created  Succesfull!",
      });
    } catch (err) {
      // const errors = handleErrors(err);

      return res.status(400).json({ errors: err.message });
    }
  }
  static async fetchCommentsPostByid(req, res) {
    const id = req.params.id;
    try {
      const allComments = await Comments.find({ post_id: id });

      // console.log(JSON.stringify(post.author));
      if (!allComments)
        return res.status(409).json({
          message: "there is no post",
        });

      res.status(201).json({
        message: "Comments retrieved  Succesfull!",
        count: allComments.length,
        data: allComments,
      });
    } catch (err) {
      return res.status(400).json({ errors: err.message });
    }
  }

  static async deleteComment(req, res) {
    try {
      // const id = req.postID;
      const id = req.params.id;

      const deleteComment = await Comments.deleteOne({ _id: id });
      if (deleteComment.acknowledged) {
        return res.status(201).json({
          message: "comments deleted successfully!!",
        });
      }
    } catch (error) {
      return res.status(501).json({
        message: "Error Deleting Post!!",
        reason: error,
      });
    }
  }
}
