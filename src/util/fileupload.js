// export const fileUplaod =
//   //(req, res) => {
//   //   console.log("file upload");
//   //   console.log(req.body);
//   //   if (
//   //     req.headers["content-type"] &&
//   //     req.headers["content-type"].startsWith("multipart/form-data")
//   //   ) {
//   //     // Multer middleware will already have parsed the form-data and added it to req.body
//   //     console.log("Form data:", req.body.name);
//   //   }
//   async (req, res, next) => {
//     console.log("DAATA>>>" + JSON.stringify(req.body));
//     // Check if the request has form-data
//     if (
//       req.headers["content-type"] &&
//       req.headers["content-type"].startsWith("multipart/form-data")
//     ) {
//       // Multer middleware will already have parsed the form-data and added it to req.body
//       const nameValue = req.body.title;
//       console.log('Value of "name" field:', nameValue);
//     // }
//     next();
//   };fileUplaod
// import multer from "multer";

// const upload = multer(); // No storage configuration needed for handling fields

// export const fileUplaod = async (req, res, next) => {
//   // Use multer's `none()` middleware to handle text fields only
//   upload.none()(req, res, (err) => {
//     if (err) {
//       console.error(err); // Log multer errors if any
//       return next(err); // Pass the error to the next middleware
//     }

//     console.log("Incoming data >>>", JSON.stringify(req.body));

//     // Now you can access req.body.title
//     const titleValue = req.body.title;
//     console.log('Value of "title" field:', titleValue);

//     // Respond or pass control to the next middleware
//     res.status(200).json({ message: "Field received", title: titleValue });
//   });
// };

import multer from "multer";

const upload = multer(); // No file storage, just handle text fields

export const fileUplaod = (req, res, next) => {
  // Use multer to parse form-data text fields
  upload.none()(req, res, (err) => {
    if (err) {
      console.error("Multer error:", err);
      return res.status(400).json({ error: "Invalid form-data" });
    }

    console.log("Incoming data >>>", req.body);

    // Access the `title` field from req.body
    const titleValue = req.body.title;
    console.log('Value of "title" field:', titleValue);

    // Respond with success or pass to next middleware
    res.status(200).json({ message: "Field received", title: titleValue });
  });
};
