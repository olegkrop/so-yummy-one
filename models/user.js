const { Schema, model } = require("mongoose");
const emailRegexp = /^[a-za-z0-9._%+-]+@[a-za-z0-9.-]+\.[a-za-z]{2,}$/;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for user"],
    },
    password: {
      type: String,
      minlength: 6,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      match: emailRegexp,
      required: [true, "Email is required"],
      unique: true,
    },

    token: {
      type: String,
      default: null,
    },
    avatarURL: {
      type: String,
    },
    favorites: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "Recipe",
        },
      ],
    },
    shoppingList: {
      type: Array,
      default: [],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = model("user", userSchema);

module.exports = User;
