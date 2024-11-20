/**
 * @swagger
 * tags:
 *   name: Author
 *   description: about the Blog posta Author
 */

// /**
//  * @swagger
//  * /api/v1/author/signup:
//  *   post:
//  *     summary: Allows an Author to create account
//  *     tags: [Author]
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         multipart/form-data:
//  *           schema:
//  *             type: object
//  *             required:
//  *               - lastName
//  *             properties:
//  *               firstName:
//  *                 type: string
//  *                 description: your firstname
//  *                 example: "Amadi"
//  *               lastName:
//  *                 type: string
//  *                 description: your firstname
//  *                 example: "Amadi"
//  *                 required: true
//  *               email:
//  *                 type: string
//  *                 description: your email
//  *                 example: "test@gmail.com"
//  *               username:
//  *                 type: string
//  *                 description: your username
//  *                 example: "magic fingers"
//  *               phoneNumber:
//  *                 type: string
//  *                 description: your mobile number
//  *                 example: "23499088676"
//  *               password:
//  *                 type: string
//  *                 example: "1234567890"
//  *                 description: password
//  *     responses:
//  *       201:
//  *         description: Post successfully created
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  *               properties:
//  *                 id:
//  *                   type: string
//  *                   description: The ID of the newly created post
//  *                   example: "612c1a65e4b0123456789abc"
//  *                 title:
//  *                   type: string
//  *                   description: The title of the post
//  *                   example: "My First Blog Post"
//  *                 content:
//  *                   type: string
//  *                   description: The content of the post
//  *                   example: "This is the body of my first blog post..."
//  *                 category:
//  *                   type: string
//  *                   description: The category of the post
//  *                   example: "Technology"
//  *                 author:
//  *                   type: string
//  *                   description: The ID of the author
//  *                   example: "612c1a65e4b0123456789abc"
//  *                 fileUrl:
//  *                   type: string
//  *                   description: The URL where the uploaded file can be accessed
//  *                   example: "https://your-domain.com/uploads/filename.jpg"
//  *       400:
//  *         description: Bad request, invalid input
//  *       500:
//  *         description: Server error
//  */
/**
 * @swagger
 * /api/v1/author/signup:
 *   post:
 *     summary: Allows an Author to create account
 *     tags: [Author]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - lastName
 *               - firstName
 *               - email
 *               - username
 *               - password
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: Your firstname
 *                 example: "Amadi"
 *               lastName:
 *                 type: string
 *                 description: Your lastname
 *                 example: "Amadi"
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Your email address
 *                 example: "test@gmail.com"
 *               username:
 *                 type: string
 *                 description: Your username
 *                 example: "magic fingers"
 *               phoneNumber:
 *                 type: string
 *                 description: Your mobile number
 *                 example: "23499088676"
 *               password:
 *                 type: string
 *                 format: password
 *                 description: Your password
 *                 example: "1234567890"
 *     responses:
 *       201:
 *         description: Author account successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       description: The author's unique identifier
 *                       example: "612c1a65e4b0123456789abc"
 *                     firstName:
 *                       type: string
 *                       example: "Amadi"
 *                     lastName:
 *                       type: string
 *                       example: "Amadi"
 *                     email:
 *                       type: string
 *                       example: "test@gmail.com"
 *                     username:
 *                       type: string
 *                       example: "magic fingers"
 *                     phoneNumber:
 *                       type: string
 *                       example: "23499088676"
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-10-25T12:00:00Z"
 *       400:
 *         description: Bad request, invalid input
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
 *       409:
 *         description: Conflict - Email or username already exists
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
 *                   example: "Email already exists"
 *       500:
 *         description: Server error
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
 * /api/v1/author/login:
 *   post:
 *     summary: Allows an Author login
 *     tags: [Author]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Your email address
 *                 example: "test@gmail.com"
 *               password:
 *                 type: string
 *                 format: password
 *                 description: Your password
 *                 example: "1234567890"
 *     responses:
 *       201:
 *         description: Login successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       description: The author's unique identifier
 *                       example: "612c1a65e4b0123456789abc"
 *                     firstName:
 *                       type: string
 *                       example: "Amadi"
 *                     lastName:
 *                       type: string
 *                       example: "Amadi"
 *                     email:
 *                       type: string
 *                       example: "test@gmail.com"
 *                     username:
 *                       type: string
 *                       example: "magic fingers"
 *                     phoneNumber:
 *                       type: string
 *                       example: "23499088676"
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-10-25T12:00:00Z"
 *       400:
 *         description: Bad request, invalid input
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
 *       409:
 *         description: Conflict - Email or username already exists
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
 *                   example: "Email already exists"
 *       500:
 *         description: Server error
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
 * /api/v1/author/verifyemail/{verifycode}:
 *   get:
 *     summary: Fetch a single post by its ID
 *     tags: [Author]
 *     parameters:
 *       - in: path
 *         name: verifycode
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
 * /api/v1/author/restcode:
 *   post:
 *     summary: For Author to receive password reset token
 *     tags: [Author]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Your email address
 *                 example: "test@gmail.com"
 *     responses:
 *       201:
 *         description: Login successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       description: The author's unique identifier
 *                       example: "612c1a65e4b0123456789abc"
 *                     firstName:
 *                       type: string
 *                       example: "Amadi"
 *                     lastName:
 *                       type: string
 *                       example: "Amadi"
 *                     email:
 *                       type: string
 *                       example: "test@gmail.com"
 *                     username:
 *                       type: string
 *                       example: "magic fingers"
 *                     phoneNumber:
 *                       type: string
 *                       example: "23499088676"
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-10-25T12:00:00Z"
 *       400:
 *         description: Bad request, invalid input
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
 *       409:
 *         description: Conflict - Email or username already exists
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
 *                   example: "Email already exists"
 *       500:
 *         description: Server error
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
