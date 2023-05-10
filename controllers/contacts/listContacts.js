const Contact = require("../../models/contacts");

const listContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { favorite } = req.query;

  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;

  const filter = { owner };

  if (favorite !== undefined) {
    filter.favorite = favorite;
  }

  const result = await Contact.find(filter, "-createdAt -updatedAt", {
    skip,
    limit,
  }).populate("owner", "email subscription");
  res.json(result);
};

module.exports = listContacts;
