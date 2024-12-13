import request from "supertest"; // Used to make HTTP requests
// import app from "../app"; // Import your Express app
import app from "./app";
import { describe } from "node:test";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "./test-files/cholesterol.jpg");

// describe("GET /api/v1/post/:id", () => {
//   // 2. Define the test case
//   it("should retrieve the blog post by ID", async () => {
//     // 3. Define the test ID
//     const postId = "6744e8b6b102e47cf7473929"; // ID of the post to retrieve

//     // 4. Make a GET request to the endpoint with the ID
//     const response = await request(app)
//       .get(`/api/v1/post/${postId}`) // The endpoint we're testing
//       .expect("Content-Type", /json/) // Ensure the response is JSON
//       .expect(200); // Expect HTTP status to be 200 (OK)
//     console.log("test" + JSON.stringify(response));
//     // 5. Check the response body
//     const post = response.body.data;
//     expect(post).toHaveProperty("_id", postId); // The response should contain the correct ID
//     expect(post).toHaveProperty("title"); // The response should have a 'title' property
//     expect(post).toHaveProperty("content"); // The response should have a 'content' property
//     expect(post).toHaveProperty("userName"); // The response should have an 'author' property
//     expect(post).toHaveProperty("reading_time"); // The response should have an 'author' property
//     expect(post).toHaveProperty("published_date"); // The response should have an 'author' property
//     expect(post).toHaveProperty("post_picture"); // The response should have an 'author' property
//   });

//   // Additional test for non-existing ID
//   // it("should return 404 if the blog post does not exist", async () => {
//   //   const invalidPostId = "nonexistentId"; // ID that doesn't exist

//   //   const response = await request(app)
//   //     .get(`/api/v1/post/${invalidPostId}`) // Test with a non-existing ID
//   //     .expect("Content-Type", /json/) // Ensure the response is JSON
//   //     .expect(404); // Expect HTTP status to be 404 (Not Found)

//   //   // Check the error message
//   //   expect(response.body).toHaveProperty("error"); // Ensure there is an error property
//   // });
// });
// describe("GET /api/v1/post", () => {
//   it("should return all posts", async () => {
//     const response = await request(app).get("/api/v1/post").expect(200);
//     expect(Array.isArray(response.body.data)).toBe(true); // Check response is an array
//     expect(response.body.data.length).toBeGreaterThan(0); // Ensure there are posts
//   });

//   // it("should return 404 if blog post does not exist", async () => {
//   //   const response = await request(app).get("/api/v1/post").expect(404);
//   //   expect(Array.isArray(response.body.data)).toBe(false); // Check response is an array
//   //   expect(response.body.data.length).toBeGreaterThan(0); // Ensure there are posts
//   //   expect(response.body.data.length).toBeLessThan(0); // Ensure there are posts
//   // });
// });
// describe("POST /api/v1/post/", () => {
//   it("should create a post by it ID", async () => {
//     const newPost = await request(app)
//       .post("/api/v1/post")
//       .field("title", "Post testing to Delete ")
//       .field("content", "post delete data")
//       .field("category", "Tech")
//       .field("author", "66456bb2eb7abd5a9c94c9eb")
//       .attach("file", filePath)
//       .expect(201)
//       .then((newPost) => {
//         console.log("Respons bOdy" + newPost.body);
//       })
//       .catch((err) => {
//         console.log("TEST>>>" + err);
//         console.error(
//           "Error Details:",
//           err.response ? err.response.body : err.message
//         );
//         throw err; // Ensure the test fails
//       });
//   });
// });

// describe("DELETE /api/v1/post/:id", () => {
//   let createdPostId = "";
//   beforeAll(async () => {
//     // Create a post to delete later
//     const filePath = path.resolve(__dirname, "./test-files/cholesterol.jpg");
//     const response = await request(app)
//       .post("/api/v1/post")
//       .field("title", "Post to Delete")
//       .field("content", "This post will be deleted.")
//       .field("category", "Tech")
//       .field("author", "66456bb2eb7abd5a9c94c9eb")
//       .attach("file", filePath)
//       .expect(201);
//     const parsedData = JSON.parse(response.text);
//     const id = parsedData.data._id;
//     console.log("DATA >>" + id);

//     createdPostId = parsedData.data._id; // Store the ID for deletion
//   });

//   it("should delete the post by ID", async () => {
//     // Delete the created post
//     const deleteResponse = await request(app)
//       .delete(`/api/v1/post/${createdPostId}`)
//       .expect(200);

//     // Check response body
//     expect(deleteResponse.body).toHaveProperty(
//       "message",
//       "Post deleted successfully!"
//     );

//     // Verify the post is no longer accessible
//     await request(app).get(`/api/v1/post/${createdPostId}`).expect(404); // Should return not found
//   });

//   it("should return 404 for non-existent post ID", async () => {
//     // Attempt to delete a non-existent post
//     const response = await request(app)
//       .delete(`/api/v1/post/${createdPostId}`)
//       .expect(404);

//     // Check the error response
//     expect(response.body).toHaveProperty("error", "Post not found");
//   });
// });

describe("PUT /api/v1/post/:id", () => {
  let createdPostId;

  beforeAll(async () => {
    // Create a post to update
    const filePath = path.resolve(__dirname, "./test-files/cholesterol.jpg");
    const response = await request(app)
      .post("/api/v1/post")
      .field("title", "Original Post Title")
      .field("content", "Original content")
      .field("category", "Health")
      .field("author", "66456bb2eb7abd5a9c94c9eb")
      .attach("file", filePath)
      .expect(201);

    // createdPostId = response.body.data._id; // Store the ID for updating
    const parsedData = JSON.parse(response.text);
    //     const id = parsedData.data._id;
    //     console.log("DATA >>" + id);

    createdPostId = parsedData.data._id; // St
  });

  it("should update the post by ID", async () => {
    // Update the post
    const updatedPostData = {
      title: "Updated Post Title",
      content: "Updated content for the post",
    };

    const updateResponse = await request(app)
      .put(`/api/v1/post/${createdPostId}`)
      .send(updatedPostData)
      .expect(200);
    const parsedData = JSON.parse(updateResponse.text);
    const parsedText = JSON.parse(parsedData.data);

    // Check response body
    expect(parsedData).toHaveProperty("message", "Post updated successfully!");
    expect(parsedText).toHaveProperty("title", "Updated Post Title");
    expect(parsedText).toHaveProperty("content", parsedText.content);

    // Verify the post is updated
    const getResponse = await request(app)
      .get(`/api/v1/post/${createdPostId}`)
      .expect(200);
    console.log("Arinze>>>" + JSON.stringify(getResponse));
    const responsText = JSON.parse(getResponse.text);
    // const responsData = JSON.parse(responsText.data);
    console.log("Ptrick>>>" + JSON.stringify(responsText.data));
    expect(responsText.data).toHaveProperty("title", updatedPostData.title);
    expect(responsText.data).toHaveProperty("content", updatedPostData.content);
  });

  it("should return 404 for updating non-existent post ID", async () => {
    const response = await request(app)
      .put("/api/v1/post/675b6e1d3ec43db61dc0b042")
      .send({
        title: "Non-existent Title",
        content: "Non-existent Content",
      })
      .expect(404);

    // Check the error response
    expect(response.body).toHaveProperty("error", "Post not found");
  });
});
