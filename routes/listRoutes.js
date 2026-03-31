const express = require('express');
const router = express.Router();
const { getAllLists, getSingleList, getListsByUser } = require('../controllers/listController');

/**
 * @swagger
 * /lists:
 *   get:
 *     summary: Get all lists
 *     tags: [Lists]
 *     responses:
 *       200:
 *         description: List of all lists
 */
router.get('/', getAllLists);

/**
 * @swagger
 * /lists/{id}:
 *   get:
 *     summary: Get a single list by ID
 *     tags: [Lists]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Single list
 *       404:
 *         description: List not found
 */
router.get('/:id', getSingleList);

/**
 * @swagger
 * /lists/user/{userId}:
 *   get:
 *     summary: Get all lists for a specific user
 *     tags: [Lists]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of user's shopping lists
 *       404:
 *         description: User not found
 */
router.get('/user/:userId', getListsByUser);

module.exports = router;