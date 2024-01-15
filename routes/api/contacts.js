// @ts-nocheck
const express = require("express");
const {getAll, add, getById, update, updateFavorite, deleteContact} = require('../../controllers/contacts');
const {validateBody, isValidId, authenticate} = require('../../middlewares');
const {schemas} = require('../../models/contact');

const router = express.Router();

router.get("/", authenticate, getAll);

router.get("/:contactId", authenticate, isValidId, getById);

router.post("/", authenticate, validateBody(schemas.addSchema), add);

router.delete("/:contactId", authenticate, isValidId, deleteContact);

router.put("/:contactId", authenticate, isValidId, validateBody(schemas.addSchema), update);

router.patch("/:contactId/favorite", authenticate, isValidId, validateBody(schemas.updateFavoriteSchema), updateFavorite);

module.exports = router;
