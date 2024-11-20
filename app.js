// //import modules
// import express from "express";
// // import router from "./src/Routes/AuthorsRoutes.js";
// import router from "./src/Routes/index.js";
// import { connection, app } from "./config/Connection.js";
// import swaggerDoc from "./swagger.js";
// //initialize middlewares
// // const app = express();
// app.use(express.static("public"));
// app.use(express.json());
// const baseurl = "/api/v1";
// app.use(baseurl, router);
// swaggerDoc(app);
// app.get("/", (req, res) => {
//   console.log("amadhffv");
//   res.send("welcome");
// });
// export default app; // Export the app for serverless functions

import express from "express";
import { connectDB, app } from "./config/Connection.js";
import router from "./src/Routes/index.js";
// import swaggerDoc from "./swagger.js";
import path from "path";
import { fileURLToPath } from "url";
// import swaggerJsdoc from "swagger-jsdoc";
// import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger.js";
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
const baseurl = "/api/v1";
import { absolutePath as swaggerUiPath } from "swagger-ui-dist";
import swaggerUiDist from "swagger-ui-dist";

import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import * as glob from "glob";
// import path from "path";
// import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.json());
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));
// app.use("/swagger-ui", express.static(swaggerUiDist.absolutePath()));
// swaggerDoc(app);

// Ensure DB is connected before handling requests
// app.use(async (req, res, next) => {
//   await connectDB();
//   next();
// });

// Use the routes
app.use(baseurl, router);

// Set up Swagger documentation
// swaggerDoc(app);
app.get("/swagger-spec", (req, res) => {
  console.log("swagger lunched 4444");
  res.json(swaggerSpec);
});
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Blog API",
      version: "1.0.0",
      description:
        "A blog Application API comprising of POST, Comments, Authors Authentication and Authorization",
      contact: {
        name: "Amadi Patrick",
        url: "https://your-website.com",
        email: "your-email@example.com",
      },
      license: {
        name: "MIT",
        url: "https://opensource.org/licenses/MIT",
      },
    },
    servers: [
      // {
      //   url: "http://localhost:3009",
      //   description: "Development server",
      // },
      // {
      //   url: "http://localhost:3006",
      //   description: "Backup server",
      // },
      {
        url: "https://amatechblogbackend.vercel.app/", // Replace with your Vercel URL
        description: "Production server",
      },
    ],
  },
  // apis: ["./src/Routes/*.js"], // Adjust path to your routes
  // apis: ["./src/Routes/documentation/*.js"], // Adjust path to your routes
  // apis: [path.join(__dirname, "./src/Routes/documentation/*.js")], // Use absolute paths
  apis: glob.sync(path.join(__dirname, "./src/Routes/documentation/*.js")),
  // apis: [path.join(__dirname, "./src/Routes/documentation/*.js")], // Use absolute paths
};
const swaggerSpecb = swaggerJsdoc(options);

console.log("Patrick  " + swaggerSpec);
console.log("Patrick " + JSON.stringify(swaggerSpecb));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecb));
// Basic route for testing
app.get("/", (req, res) => {
  res.send("Welcome test index ");
});
app.get("/mypage", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
// No need to listen on a port, since Vercel handles that part
export default app;
