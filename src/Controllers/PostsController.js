import Posts from "../Models/Posts.js";
import { display } from "../util/display.js";
import multer from "multer";
import redis from "redis";
import { v2 as cloudinary } from "cloudinary";
import mongoose from "mongoose";
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
    // console.log("data>>>>" + imageUrl);
    try {
      const data = {
        title: req.body.title,
        content: req.body.content,
        author: mongoose.Types.ObjectId(req.body.author),
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

      if (!post)
        return res.status(409).json({
          message: "there is no post",
        });
      const { lastName, username } = post.author;
      const {
        _id,
        content,
        title,
        published_date,
        reading_time,
        post_picture,
      } = post;
      console.log(9, post);
      const filteredData = {
        lastName: lastName,
        _id: _id,
        userName: username,
        content: content,
        title: title.toUpperCase(),
        reading_time,
        published_date,
        post_picture,
      };
      // console.log(JSON.stringify(post.author));

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
      const posts = await Posts.find({}).populate({
        path: "author",
        options: { strictPopulate: false },
      });

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

  //   const express = require('express');
  // const router = express.Router();
  // const Post = require('../models/Post'); // Assuming you have a Post model

  // // Update a post by ID
  // router.put('/posts/:id', async (req, res) => {
  //     const postId = req.params.id;
  //     const updateData = req.body;

  //     try {
  //         // Find and update the post
  //         const updatedPost = await Post.findByIdAndUpdate(postId, updateData, { new: true });

  //         if (!updatedPost) {
  //             return res.status(404).json({ message: 'Post not found' });
  //         }

  //         res.status(200).json(updatedPost);
  //     } catch (error) {
  //         console.error(error);
  //         res.status(500).json({ message: 'Failed to update the post' });
  //     }
  // });

  // module.exports = router;

  static async UpdatePost(req, res) {
    try {
      const id = req.postID;
      const content = req.body.content;
      const title = req.body.title;
      const data = {
        content: content,
        title: title,
      };
      console.log("UPDATE ID" + id);
      console.log("UPDATE ID" + JSON.stringify(req.body));
      console.log("UPDATE ID" + title);
      // const updatePost = await Posts.updateOne(
      //   { _id: id },
      //   { $set: { content: content, title: title } }
      // );
      const updatedPost = await Posts.findByIdAndUpdate(id, data, {
        new: true,
      });
      if (updatedPost) {
        return res.status(201).json({
          message: "Post updated successfully!!",
          data: JSON.stringify(data),
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
