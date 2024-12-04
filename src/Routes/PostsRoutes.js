import Router from "express";
import postcontroller from "../Controllers/PostsController.js";
import { PostExist } from "../middlewares/postmiddleware.js";
import { fileUplaod } from "../util/fileupload.js";
import multer from "multer";
import path from "path";
const upload_multi = multer();
const postRouter = Router();
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
if (storage) {
}
const upload = multer({ storage });
// postRouter.post("/", fileUplaod, (req, res) => {
//   console.log("POST SUCCESFULLY");
// });
//09034011070

postRouter.post("/", upload.single("file"), postcontroller.createPost);
postRouter.get("/:id", postcontroller.fetchSinglePostByid);
postRouter.delete("/:id", PostExist, postcontroller.deletePost);
postRouter.put(
  "/:id",
  upload_multi.none(),
  PostExist,
  postcontroller.UpdatePost
);
postRouter.get("/", postcontroller.fetchAllPost);
export default postRouter;
