const express = require("express");

const router = express.Router();

const ctrlUser = require("../../controllers/users");
const { ctrlWrapper } = require("../../helpers");

const { validateBody, authenticate, upload } = require("../../middlewares");
const schemas = require("../../schemas");

// Registration
router.post(
  "/register",
  validateBody(schemas.registerSchema),
  ctrlWrapper(ctrlUser.register)
);
// LogIn
router.post(
  "/login",
  validateBody(schemas.loginSchema),
  ctrlWrapper(ctrlUser.login)
);
// avatars(используем позже)

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrlWrapper(ctrlUser.updateAvatar)
);
// Get current user

router.get("/current", authenticate, ctrlWrapper(ctrlUser.getCurrent));

// Update user fields
authRouter.put(
  "/auth/user/update",
  authenticate,
  validateBody(schemas.updateUserSchema),
  ctrlWrapper(updateUser)
);
//logout
router.post("/logout", authenticate, ctrlWrapper(ctrlUser.logout));

module.exports = router;
