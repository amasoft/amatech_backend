export const fileUplaod =
  //(req, res) => {
  //   console.log("file upload");
  //   console.log(req.body);
  //   if (
  //     req.headers["content-type"] &&
  //     req.headers["content-type"].startsWith("multipart/form-data")
  //   ) {
  //     // Multer middleware will already have parsed the form-data and added it to req.body
  //     console.log("Form data:", req.body.name);
  //   }
  (req, res, next) => {
    // Check if the request has form-data
    if (
      req.headers["content-type"] &&
      req.headers["content-type"].startsWith("multipart/form-data")
    ) {
      // Multer middleware will already have parsed the form-data and added it to req.body
      const nameValue = req.body.name;
      console.log('Value of "name" field:', nameValue);
    }
    next();
  };
