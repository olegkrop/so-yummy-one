const express = require("express");

const router = express.Router();

const ctrlUser = require("../../controllers/users");
const { ctrlWrapper } = require("../../helpers");

const { validateBody, authenticate, upload } = require("../../middlewares");
const schemas = require("../../schemas");

router.post(
  "/register",
  validateBody(schemas.registerSchema),
  ctrlWrapper(ctrlUser.register)
);

router.post(
  "/login",
  validateBody(schemas.loginSchema),
  ctrlWrapper(ctrlUser.login)
);

router.patch(
  "/",
  authenticate,
  validateBody(schemas.updateSubscription),
  ctrlWrapper(ctrlUser.updateSubscription)
);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrlWrapper(ctrlUser.updateAvatar)
);

router.get("/current", authenticate, ctrlWrapper(ctrlUser.getCurrent));

router.post("/logout", authenticate, ctrlWrapper(ctrlUser.logout));

module.exports = router;
