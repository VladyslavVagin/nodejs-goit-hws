// @ts-nocheck
const { ctrlWrapper } = require("../helpers");
const Book = require("../models/contact")

const getAll = async (req, res) => {
  const result = await Book.find();
  res.json(result);
};

// const getById = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await getContactById(contactId);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
//   res.json(result);
// };

// const add = async (req, res) => {
//   const result = await addContact(req.body);
//   res.status(201).json(result);
// };

// const deleteContact = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await removeContact(contactId);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
//   res.json({
//     message: "Delete success",
//   });
// };

// const update = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await updateContact(contactId, req.body);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
//   res.json(result);
// };

module.exports = {
  getAll: ctrlWrapper(getAll),
  // getById: ctrlWrapper(getById),
  // add: ctrlWrapper(add),
  // deleteContact: ctrlWrapper(deleteContact),
  // update: ctrlWrapper(update),
};
