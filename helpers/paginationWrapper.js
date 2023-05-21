const paginationWrapper = async (model, query, page = 1, limit = 10) => {
  const options = {
    page: parseInt(page),
    limit: parseInt(limit),
  };

  try {
    const result = await model.paginate(query, options);
    return result;
  } catch (error) {
    throw new Error("Error paginating results");
  }
};

module.exports = paginationWrapper;
