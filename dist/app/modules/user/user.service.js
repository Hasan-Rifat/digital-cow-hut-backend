"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_model_1 = require("./user.model");
const getAllUser = () => {
    const data = user_model_1.User.where({});
    return data;
};
const getSingleUser = (id) => {
    const data = user_model_1.User.findById(id);
    return data;
};
const updateUser = (id, payload) => {
    const data = user_model_1.User.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return data;
};
const deleteUser = (id) => {
    const data = user_model_1.User.findByIdAndDelete(id);
    return data;
};
exports.UserService = {
    getAllUser,
    getSingleUser,
    updateUser,
    deleteUser,
};
