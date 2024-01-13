// @ts-nocheck
const express = require("express");
const {getAll, add, getById, update, updateFavorite, deleteContact} = require('../../controllers/contacts');
const {validateBody, isValidId} = require('../../middlewares');
const {schemas} = require('../../models/contact');

const router = express.Router();

router.get("/", getAll);

router.get("/:contactId", isValidId, getById);

router.post("/", validateBody(schemas.addSchema), add);

router.delete("/:contactId",isValidId, deleteContact);

router.put("/:contactId", isValidId, validateBody(schemas.addSchema), update);

router.patch("/:contactId/favorite", isValidId, validateBody(schemas.updateFavoriteSchema), updateFavorite);

module.exports = router;
