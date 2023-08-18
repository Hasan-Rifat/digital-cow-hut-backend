"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const user_constants_1 = require("./user.constants");
const userSchema = new mongoose_1.Schema({
    password: { type: String, required: true },
    role: {
        required: true,
        type: String,
        enum: user_constants_1.role,
    },
    name: {
        required: true,
        type: {
            firstName: { type: String, required: true },
            lastName: { type: String, required: true },
        },
    },
    phoneNumber: { type: String, required: true },
    address: {
        required: true,
        type: String,
    },
    budget: {
        required: true,
        type: Number,
    },
    income: {
        required: true,
        type: Number,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.User = (0, mongoose_1.model)('User', userSchema);
