const express = require("express");

const router = express.Router();

const ctrlContacts = require("../../controllers/contacts");
const { ctrlWrapper } = require("../../helpers");

const { validateBody, isvalidId, authenticate } = require("../../middlewares");

const schemas = require("../../schemas");

router.get("/", authenticate, ctrlWrapper(ctrlContacts.listContacts));

router.get(
  "/:contactId",
  authenticate,
  isvalidId,
  ctrlWrapper(ctrlContacts.getContactById)
);

router.post(
  "/",
  authenticate,
  validateBody(schemas.putContactsSchema),
  ctrlWrapper(ctrlContacts.addContact)
);

router.delete(
  "/:contactId",
  authenticate,
  isvalidId,
  ctrlWrapper(ctrlContacts.removeContact)
);

router.put(
  "/:contactId",
  authenticate,
  isvalidId,
  validateBody(schemas.putContactsSchema),
  ctrlWrapper(ctrlContacts.updateContact)
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isvalidId,
  validateBody(schemas.updateFavorite),
  ctrlWrapper(ctrlContacts.updateStatusContact)
);

module.exports = router;
