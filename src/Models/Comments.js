import mongoose from "mongoose";

const comments = mongoose.Schema(
  {
    user_comment: {
      type: String,
    },

    post_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "posts",
      required: true,
    },
    user: {
      type: String,
    },
    Comment_date: {
      type: String,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  }
);

const Comments = mongoose.model("comment", comments);
export default Comments;
