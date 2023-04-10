const { Contact } = require("../models/contact");
const { HttpBaseError, ctrlWrapper } = require('../helpers/index.js')

const getAll = async (req, res) => {
    const { _id: owner } = req.user;
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;
    const contacts = await Contact.find({ owner }, '-createdAt -updatedAt', { skip, limit }).populate('owner', "email");
    res.json({
        status: "success",
        code: 200,
        data: { contacts },
    });
}

const getById = async (req, res) => {
    const { contactId } = req.params;
    const contact = await Contact.findById(contactId);
    if (contact) {
        res.json({
            status: "success",
            code: 200,
            data: { contact },
        });
    } else {
        throw HttpBaseError(404)
    }
}

const add = async (req, res) => {
    const { _id: owner } = req.user;
    const newContact = await Contact.create({ ...req.body, owner });
    res.json({
        status: "success",
        code: 200,
        data: { newContact },
    });
}

const delById = async (req, res) => {
    const { contactId } = req.params;
    const contact = await Contact.findByIdAndRemove(contactId);
    if (contact) {
        res.json({
            status: "success",
            code: 200,
            message: "Contact deleted",
        });
    } else {
        throw HttpBaseError(404)
    }
}

const updateById = async (req, res) => {
    const { contactId } = req.params;
    const contact = await Contact.findByIdAndUpdate(contactId, req.body, { new: true });
    if (contact) {
        return res.json({
            status: "success",
            code: 200,
            data: {
                contact,
            },
        });
    } else {
        throw HttpBaseError(404)
    }
}

const updateFavorite = async (req, res) => {
    const { contactId } = req.params;
    const contact = await Contact.findByIdAndUpdate(contactId, req.body, { new: true });
    if (contact) {
        return res.json({
            status: "success",
            code: 200,
            data: {
                contact,
            },
        });
    } else {
        throw HttpBaseError(404)
    }
}

module.exports = {
    getAll: ctrlWrapper(getAll),
    getById: ctrlWrapper(getById),
    add: ctrlWrapper(add),
    delById: ctrlWrapper(delById),
    updateById: ctrlWrapper(updateById),
    updateFavorite: ctrlWrapper(updateFavorite),
}