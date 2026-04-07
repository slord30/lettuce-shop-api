const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");
const { itemValidationRules, validate } = require("../middleware/validate");
const { ensureAuthenticated } = require("../middleware/auth");

/**
 * @swagger
 * /Items:
 *   get:
 *     summary: Get all items
 *     tags: [Items]
 *     responses:
 *       200:
 *         description: List of all items
 *         content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          $ref: '#/components/schemas/Item'
 */
router.get("/", itemController.getAllItems);

/**
 * @swagger
 * /Items/{id}:
 *   get:
 *     summary: Get a single item by ID
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Single item
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 *       404:
 *         description: Item not found
 */
router.get("/:id", itemController.getSingleItem);

/**
 * @swagger
 * /Items:
 *   post:
 *     summary: Create a new item
 *     tags: [Items]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Item'
 *     responses:
 *       201:
 *         description: Item created
 */
router.post(
  "/",
  ensureAuthenticated,
  itemValidationRules(),
  validate,
  itemController.createItem,
);

/**
 * @swagger
 * /Items/{id}:
 *   put:
 *     summary: Update an item
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Item updated
 *       404:
 *         description: Item not found
 */
router.put(
  "/:id",
  ensureAuthenticated,
  itemValidationRules(),
  validate,
  itemController.updateItem,
);

/**
 * @swagger
 * /Items/{id}:
 *   delete:
 *     summary: Delete an item
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Item deleted successfully
 *       404:
 *         description: Item not found
 */
router.delete("/:id", ensureAuthenticated, itemController.deleteItem);

module.exports = router;
