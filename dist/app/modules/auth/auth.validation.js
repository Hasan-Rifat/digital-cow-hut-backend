"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidationSchema = void 0;
const zod_1 = require("zod");
const user_constants_1 = require("../user/user.constants");
const CreateUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        password: zod_1.z.string({
            required_error: 'Password is required',
        }),
        role: zod_1.z.enum([...user_constants_1.role], {
            required_error: 'Role is required',
        }),
        name: zod_1.z.object({
            firstName: zod_1.z.string({
                required_error: 'First name is required f',
            }),
            lastName: zod_1.z.string({
                required_error: 'Last name is required',
            }),
        }),
        phoneNumber: zod_1.z.string({
            required_error: 'Phone number is required',
        }),
        address: zod_1.z.string({
            required_error: 'Address is required',
        }),
        budget: zod_1.z.number({
            required_error: 'Budget is required',
        }),
        income: zod_1.z.number({
            required_error: 'Income is required',
        }),
    }),
});
exports.AuthValidationSchema = {
    CreateUserZodSchema,
};
