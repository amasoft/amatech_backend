/**
 * @swagger
 * /api/v1/post/{id}:
 *   get:
 *     summary: Fetch a single post by its ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the post to fetch
 *         schema:
 *           type: string
 *           example: "612c1a65e4b0123456789abc"
 *     responses:
 *       200:
 *         description: Successfully fetched the post
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The ID of the post
 *                   example: "612c1a65e4b0123456789abc"
 *                 title:
 *                   type: string
 *                   description: The title of the post
 *                   example: "Understanding Node.js"
 *                 content:
 *                   type: string
 *                   description: The content of the post
 *                   example: "This post explains the fundamentals of Node.js..."
 *                 author:
 *                   type: string
 *                   description: The ID of the author who created the post
 *                   example: "1234567890abcdef12345678"
 *                 category:
 *                   type: string
 *                   description: The category of the post
 *                   example: "Technology"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   description: The time the post was created
 *                   example: "2024-10-21T12:34:56Z"
 *       404:
 *         description: Post not found
 *       400:
 *         description: Invalid ID supplied
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/v1/post/:
 *   post:
 *     summary: Create a new post with an optional file upload
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the post
 *                 example: "My First Blog Post"
 *               content:
 *                 type: string
 *                 description: The content of the post
 *                 example: "This is the body of my first blog post..."
 *               category:
 *                 type: string
 *                 description: The category of the post
 *                 example: "Technology"
 *               author:
 *                 type: string
 *                 description: The ID of the post author (user ID)
 *                 example: "612c1a65e4b0123456789abc"
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: An optional file to upload (e.g., an image)
 *     responses:
 *       201:
 *         description: Post successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The ID of the newly created post
 *                   example: "612c1a65e4b0123456789abc"
 *                 title:
 *                   type: string
 *                   description: The title of the post
 *                   example: "My First Blog Post"
 *                 content:
 *                   type: string
 *                   description: The content of the post
 *                   example: "This is the body of my first blog post..."
 *                 category:
 *                   type: string
 *                   description: The category of the post
 *                   example: "Technology"
 *                 author:
 *                   type: string
 *                   description: The ID of the author
 *                   example: "612c1a65e4b0123456789abc"
 *                 fileUrl:
 *                   type: string
 *                   description: The URL where the uploaded file can be accessed
 *                   example: "https://your-domain.com/uploads/filename.jpg"
 *       400:
 *         description: Bad request, invalid input
 *       500:
 *         description: Server error
 */
/**
 * @swagger
 * /api/v1/post:
 *   get:
 *     summary: Fetch all posts
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: Successfully retrieved posts
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates if the request was successful
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         format: uuid
 *                         description: The post's unique identifier
 *                         example: "123e4567-e89b-12d3-a456-426614174000"
 *                       title:
 *                         type: string
 *                         description: The title of the post
 *                         example: "Sample Post Title"
 *                       content:
 *                         type: string
 *                         description: The content of the post
 *                         example: "This is the content of the post..."
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         description: Post creation timestamp
 *                         example: "2024-10-25T12:00:00Z"
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         description: Last update timestamp
 *                         example: "2024-10-25T12:00:00Z"
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     currentPage:
 *                       type: integer
 *                       description: Current page number
 *                       example: 1
 *                     totalPages:
 *                       type: integer
 *                       description: Total number of pages
 *                       example: 10
 *                     totalItems:
 *                       type: integer
 *                       description: Total number of posts
 *                       example: 100
 *                     itemsPerPage:
 *                       type: integer
 *                       description: Number of items per page
 *                       example: 10
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: string
 *                   example: "Invalid pagination parameters"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: string
 *                   example: "Internal server error"
 */

/**
 * @swagger
 * /api/v1/post/{id}:
 *   put:
 *     summary: Update an existing Blog post
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the post to update
 *         example: "612c1a65e4b0123456789abc"
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The updated title of the post
 *                 example: "Updated Blog Post Title"
 *               content:
 *                 type: string
 *                 description: The updated content of the post
 *                 example: "This is the updated content of my blog post..."
 *               category:
 *                 type: string
 *                 description: The updated category of the post
 *                 example: "Technology"
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: A new file to replace the existing one (optional)
 *     responses:
 *       200:
 *         description: Post successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates if the update was successful
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       description: The post's unique identifier
 *                       example: "612c1a65e4b0123456789abc"
 *                     title:
 *                       type: string
 *                       description: The updated title of the post
 *                       example: "Updated Blog Post Title"
 *                     content:
 *                       type: string
 *                       description: The updated content of the post
 *                       example: "This is the updated content of my blog post..."
 *                     category:
 *                       type: string
 *                       description: The updated category of the post
 *                       example: "Technology"
 *                     fileUrl:
 *                       type: string
 *                       description: The URL of the updated file (if a new file was uploaded)
 *                       example: "https://your-domain.com/uploads/updated-filename.jpg"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       description: Timestamp of the update
 *                       example: "2024-10-25T12:00:00Z"
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: string
 *                   example: "Invalid input parameters"
 *       404:
 *         description: Post not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: string
 *                   example: "Post not found"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: string
 *                   example: "Internal server error"
 */

/**
 * @swagger
 * /api/v1/post/{id}:
 *   delete:
 *     summary: delete an existing Blog post
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the post to update
 *         example: "612c1a65e4b0123456789abc"
 *     responses:
 *       200:
 *         description: Post successfully deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates if post delete  was successful
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       description: The post's unique identifier
 *                       example: "612c1a65e4b0123456789abc"
 *                     title:
 *                       type: string
 *                       description: The updated title of the post
 *                       example: "Updated Blog Post Title"
 *                     content:
 *                       type: string
 *                       description: The updated content of the post
 *                       example: "This is the updated content of my blog post..."
 *                     category:
 *                       type: string
 *                       description: The updated category of the post
 *                       example: "Technology"
 *                     fileUrl:
 *                       type: string
 *                       description: The URL of the updated file (if a new file was uploaded)
 *                       example: "https://your-domain.com/uploads/updated-filename.jpg"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       description: Timestamp of the update
 *                       example: "2024-10-25T12:00:00Z"
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: string
 *                   example: "Invalid input parameters"
 *       404:
 *         description: Post not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: string
 *                   example: "Post not found"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: string
 *                   example: "Internal server error"
 */
