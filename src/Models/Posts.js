import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { type } from "os";
const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    post_picture: {
      type: String,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "authors",
      required: true,
    },
    category: {
      type: String,
    },
    published_date: {
      type: String,
      default: Date.now(),
    },
    reading_time: {
      type: String,
      default: "5 minutes",
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("post", postSchema);
export default Post;
