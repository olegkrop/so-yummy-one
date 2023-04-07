const express = require("express");
const router = express.Router();
const ctrl = require('../../controllers/contacts')
const { contact, favorite } = require("../../utilities/validation.js");

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", contact, ctrl.add);

router.delete("/:contactId", ctrl.delById);

router.put("/:contactId", contact, ctrl.updateById);

router.patch("/:contactId/favorite", favorite, ctrl.updateFavorite);

module.exports = router;
