const express = require("express");
const router = express.Router();
const ctrl = require('../../controllers/contacts')
const { schemas } = require("../../models/contact");
const authorization = require('../../middlewares/authorization')

router.get("/", authorization, ctrl.getAll);

router.get("/:contactId", authorization, ctrl.getById);

router.post("/", authorization, schemas.contact, ctrl.add);

router.delete("/:contactId", authorization, ctrl.delById);

router.put("/:contactId", authorization, schemas.contact, ctrl.updateById);

router.patch("/:contactId/favorite", authorization, schemas.favorite, ctrl.updateFavorite);

module.exports = router;
