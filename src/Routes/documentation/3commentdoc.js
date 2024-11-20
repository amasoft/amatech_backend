/**
 * @swagger
 * tags:
 *   name: Comments
 *   description: User comments
 */

/**
 * @swagger
 * /comments/{id}:
 *   post:
 *     summary: Create a new comment
 *     tags: [Comments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: The user ID
 *                 example: "123"
 *               name:
 *                 type: string
 *                 description: The user's name
 *                 example: "Doris"
 *     responses:
 *       201:
 *         description: Comment successfully created
 *       400:
 *         description: Bad request, invalid input
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * tags:
 *   name: Comments
 *   description: User management
 */

/**
 * @swagger
 * /:id:
 *   get:
 *     summary: Retrieve a single user of comments
 *     tags: [Comments]
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: The user ID.
 *                     example: "123"
 *                   name:
 *                     type: string
 *                     description: The user's name.
 *                     example: "Doris"
 */
