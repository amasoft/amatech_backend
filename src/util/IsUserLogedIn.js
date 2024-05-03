const jwt = require("jsonwebtoken");
const Author = require("../Models/Authors");

export const isUserLogedIn = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      //decode token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await Author.findById(decoded.id).select("-passwword"); //return data withut [passord reason for -password]
      next();
    } catch (error) {
      console.log("Token error" + error);
      res.status(401);
      throw new Error("Not authorized,token failed");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized,token failed");
  }
});
