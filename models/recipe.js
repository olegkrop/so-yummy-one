const { Schema, model } = require("mongoose");
const categories = require("../data/categories");

const recipeSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Set title for recipe"],
    },

    category: {
      type: String,
      enum: [...categories],
      required: [true, "Set category for recipe"],
    },

    area: {
      type: String,
    },

    instructions: {
      type: String,
      required: [true, "Set instructions for recipe"],
    },

    description: {
      type: String,
    },

    thumb: {
      type: String,
      required: [true, "Set image for recipe"],
    },

    preview: {
      type: String,
    },

    time: {
      type: String,
      required: true,
    },

    youtube: {
      type: String,
    },
    tags: {
      type: Array,
      default: [],
    },
    createdAt: {
      type: String,
    },
    updatedAt: {
      type: String,
    },
    ingredients: {
      type: Array,
      default: [],
    },
  },
  { versionKey: false, timestamps: true }
);
// recipeSchema.post("save", handleMongooseError);

const Recipe = model("recipe", recipeSchema);

module.exports = Recipe;
