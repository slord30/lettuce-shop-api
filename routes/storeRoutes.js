const express = require("express");
const router = express.Router();
const storeController = require("../controllers/storeController");
const { storeValidationRules, validate } = require("../middleware/validate");
const { ensureAuthenticated } = require("../middleware/auth");

/**
 * @swagger
 * /Stores:
 *   get:
 *     summary: Get all stores
 *     tags: [Stores]
 *     responses:
 *       200:
 *         description: List of all stores
 *         content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          $ref: '#/components/schemas/Store'
 */
router.get("/", storeController.getAllStores);

/**
 * @swagger
 * /Stores/{id}:
 *   get:
 *     summary: Get a single store by ID
 *     tags: [Stores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Single store
 *         content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          $ref: '#/components/schemas/Store'
 *       404:
 *         description: Store not found
 */
router.get("/:id", storeController.getSingleStore);

/**
 * @swagger
 * /Stores:
 *   post:
 *     summary: Create a new Store
 *     tags: [Stores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Store'
 *     responses:
 *       201:
 *         description: Store created
 */
router.post(
  "/",
  ensureAuthenticated,
  storeValidationRules(),
  validate,
  storeController.createStore,
); // ✅ matches our resolved controller

/**
 * @swagger
 * /Stores/{id}:
 *   put:
 *     summary: Update a store
 *     tags: [Stores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Store updated
 *       404:
 *         description: Store not found
 */
router.put(
  "/:id",
  ensureAuthenticated,
  storeValidationRules(),
  validate,
  storeController.updateStore,
);

/**
 * @swagger
 * /Stores/{id}:
 *   delete:
 *     summary: Delete a store
 *     tags: [Stores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Store deleted successfully
 *       404:
 *         description: Store not found
 */
router.delete("/:id", ensureAuthenticated, storeController.deleteStore);

module.exports = router;
