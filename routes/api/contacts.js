// @ts-nocheck
const express = require("express");
const {getAll, add} = require('../../controllers/contacts');
// const {validateBody} = require('../../middlewares');
// const {addSchema} = require('../../schemas/contacts');

const router = express.Router();

router.get("/", getAll);

// router.get("/:contactId", getById);

router.post("/", add);

// router.delete("/:contactId", deleteContact);

// router.put("/:contactId", validateBody(addSchema), update);

module.exports = router;
