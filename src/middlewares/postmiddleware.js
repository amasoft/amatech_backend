import Post from "../Models/Posts.js";
import Joi from "joi";
import { display } from "../util/display.js";
import multer from "multer";
import path from "path";
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

// export const upload_image = async (req, res, next) => {
//   const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, "images/");
//     },
//     filename: (req, file, cb) => {
//       // cb(null,req.body.name)
//       const fileName = req.body.name || file.originalname;
//       cb(null, fileName);
//     },
//   });
//   if (storage) {
//     next();
//   }
//   expor const upload = multer({ storage });
// };
