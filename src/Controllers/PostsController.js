import Posts from "../Models/Posts.js";
import { display } from "../util/display.js";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";

export default class postcontroller {
  static async createPost(req, res) {
    // upload image first
    // Configure Multer for file uploads
    const upload = multer({ dest: "uploads/" });

    // Configure Cloudinary
    // cloudinary.config({
    //   cloud_name: "dysiejkoy",
    //   api_key: "253859551881796",
    //   api_secret: "vVaqWokfbZHZMoOBaBLX1OyS98s",
    // });
    // display("post", "data");
    // const result = await cloudinary.uploader.upload(req.file.path);
    // console.log("result" + JSON.stringfy(result));
    try {
      const post = await Posts.create(req.body);
      if (!post)
        return res.status(409).json({
          message: "Error creating Post",
        });

      res.status(201).json({
        message: "Post Created  Succesfull!",
      });
    } catch (err) {
      // const errors = handleErrors(err);

      return res.status(400).json({ errors: err.message });
    }
  }
  static async fetchSinglePostByid(req, res) {
    display("post", "data");
    const id = req.params.id;
    try {
      const post = await Posts.findOne({ _id: id }, { post_picture: 0 });

      if (!post)
        return res.status(409).json({
          message: "there is no post",
        });

      res.status(201).json({
        message: "Post retrieved  Succesfull!",
        data: post,
      });
    } catch (err) {
      // const errors = handleErrors(err);

      return res.status(400).json({ errors: err.message });
    }
  }

  static async fetchAllPost(req, res) {
    display("post", "data");
    try {
      const post = await Posts.find({}, { post_picture: 0 });

      if (!post)
        return res.status(409).json({
          message: "there is no post",
        });

      res.status(201).json({
        count: post.length,
        data: post,
      });
    } catch (err) {
      // const errors = handleErrors(err);

      return res.status(400).json({ errors: err.message });
    }
  }
  static async deletePost(req, res) {
    try {
      const id = req.postID;
      const deletePost = await Posts.deleteOne({ _id: id });
      if (deletePost.acknowledged) {
        return res.status(201).json({
          message: "Post deleted successfully!!",
        });
      }
    } catch (error) {
      return res.status(501).json({
        message: "Error Deleting Post!!",
        reason: error,
      });
    }
  }

  static async UpdatePost(req, res) {
    try {
      const id = req.postID;
      const content = req.body.content;
      const title = req.body.title;
      const updatePost = await Posts.updateOne(
        { _id: id },
        { $set: { content: content, title: title } }
      );
      if (updatePost.acknowledged) {
        return res.status(201).json({
          message: "Post updated successfully!!",
          data: updatePost,
        });
      }
    } catch (error) {
      return res.status(501).json({
        message: "Error updating Post!!",
        reason: JSON.stringify(error),
      });
    }
  }
}
