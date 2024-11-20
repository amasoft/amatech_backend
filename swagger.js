// // swagger.js
// import swaggerJsdoc from "swagger-jsdoc";
// import swaggerUi from "swagger-ui-express";
// // Swagger configuration
// const options = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "Blog API", // Change to your API name
//       version: "1.0.0",
//       description:
//         "A blog Application Api comprising of POST,Comments,AUthors Authentication and Authorization", // Short description
//       contact: {
//         name: "Amadi Patrick",
//         url: "https://your-website.com", // Your business or personal URL
//         email: "your-email@example.com",
//       },
//       license: {
//         name: "MIT",
//         url: "https://opensource.org/licenses/MIT",
//       },
//     },
//     servers: [
//       {
//         url: "http://localhost:3009", // Your local server URL
//         description: "Development server",
//       },
//       {
//         url: "https://amatech-backend.onrender.com", // Your local server URL
//         description: "Production server",
//       },
//     ],
//   },
//   //   apis: ["./routes/*.js"], // Path to your API files
//   apis: ["./src/Routes/*.js"], // Path to your API files
// };

// const swaggerSpec = swaggerJsdoc(options);

// const swaggerDocs = (app) => {
//   app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// };

// export default swaggerDocs;

import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
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
  apis: [path.join(__dirname, "./src/Routes/documentation/*.js")], // Use absolute paths
};

export const swaggerSpec = swaggerJsdoc(options);
// const swaggerDocs = (app) => {
//   console.log("SWAGGER DOC");
//   console.log(app);
//   app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// };

// export default swaggerDocs;
