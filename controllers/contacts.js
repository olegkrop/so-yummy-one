const Contact = require("../models/contact");
const { HttpError, ctrlWrapper } = require('../helpers/index.js')

const getAll = async (req, res) => {
    const contacts = await Contact.find();
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
        throw HttpError(404, 'Not found')
    }
}

const add = async (req, res) => {

    const newContact = await Contact.create(req.body);
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
        throw HttpError(404, 'Not found')
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
        throw HttpError(404, 'Not found')
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
        throw HttpError(404, 'Not found')
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