import Posts from "../Models/Posts.js";
import { display } from "../util/display.js";
import multer from "multer";
import redis from "redis";
import { v2 as cloudinary } from "cloudinary";

export default class postcontroller {
  static async createPost(req, res) {
    // upload image first
    // Configure Multer for file uploads
    // const upload = multer({ dest: "uploads/" });

    cloudinary.config({
      cloud_name: "dysiejkoy",
      api_key: "253859551881796",
      api_secret: "vVaqWokfbZHZMoOBaBLX1OyS98s",
    });
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, "images/");
      },
      filename: (req, file, cb) => {
        // cb(null,req.body.name)
        const fileName = req.body.name || file.originalname;
        cb(null, fileName);
      },
    });

    const upload = multer({ storage });
    async function uploadImage(filePath) {
      try {
        const response = await cloudinary.uploader.upload(filePath, {
          resource_type: "auto", // Automatically detects image/video type
        });
        console.log("Image uploaded successfully!", response);
        return response.secure_url; // Get the uploaded image URL
      } catch (err) {
        console.error("Error uploading image:", err);
      }
    }
    const imageUrl = await uploadImage(req.file.path);
    console.log("data>>>>" + imageUrl);
    try {
      const data = {
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        category: req.body.category,
        post_picture: imageUrl,
      };
      console.log(data);
      const post = await Posts.create(data);
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
    const id = req.params.id;
    try {
      const post = await Posts.findOne(
        { _id: id }
        // { post_picture: 0 }
      ).populate({
        path: "author",
        options: { strictPopulate: false },
      });

      const { lastName, username } = post.author;
      const { _id, content, title, published_date, reading_time } = post;
      console.log(9, post);
      const filteredData = {
        lastName: lastName,
        _id: _id,
        userName: username,
        content: content,
        title: title.toUpperCase(),
        reading_time,
        published_date,
      };
      // console.log(JSON.stringify(post.author));
      if (!post)
        return res.status(409).json({
          message: "there is no post",
        });

      res.status(201).json({
        message: "Post retrieved  Succesfull!",
        data: filteredData,
      });
    } catch (err) {
      // const errors = handleErrors(err);

      return res.status(400).json({ errors: err.message });
    }
  }

  static async fetchAllPost(req, res) {
    const { id } = req.params;

    // const client = redis.createClient();
    // console.log("client>>>" + JSON.stringify(client));
    // const data = {
    //   id,
    //   name: `Item ${id}`,
    //   description: `Description for item ${id}`,
    // };
    // client.setex(id, process.env.CACHE_DURATION, JSON.stringify(data));

    try {
      const posts = await Posts.find({});

      if (!posts || posts.length === 0) {
        return res.status(409).json({
          message: "There are no posts",
        });
      }
      res.status(201).json({
        count: posts.length,
        data: posts,
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
