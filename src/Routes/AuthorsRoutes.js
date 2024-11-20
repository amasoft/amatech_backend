import Router from "express";
import authoController from "../Controllers/AuthorController.js";
// import {
//   UserExist,
//   EmailExist,
//   isresetCodevalid,
//   isEmailverified,
// } from "../middlewares/authmiddleware.js";
import {
  AuthorExist,
  EmailExist,
  isresetCodevalid,
  usernameExist,
  validateInput,
  validateLoginInput,
} from "../middlewares/authmiddleware.js";
const authorRouter = Router();

authorRouter.post(
  "/signup",
  [validateInput],
  [AuthorExist],
  // [usernameExist],
  authoController.signup
);

authorRouter.post("/login", [validateLoginInput], authoController.login);
authorRouter.get("/verifyemail/:verifycode", authoController.verifyEmail);
// router.post("/isemailverified", [isEmailverified], authentication.getProfiles);
authorRouter.post("/restcode", [EmailExist], authoController.sendRestpassword); //send code to user for password  rest
authorRouter.get(
  "/forgotpassword/:token",
  [isresetCodevalid],
  authoController.forgotPassword
);
// //check password strength

export default authorRouter;
