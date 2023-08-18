"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const user_model_1 = require("../user/user.model");
const createUser = (user) => {
    const data = user_model_1.User.create(user);
    return data;
};
exports.AuthService = {
    createUser,
};
