"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = __importDefault(require("express"));
const middleware_1 = __importDefault(require("../../middleware/middleware"));
const user_controller_1 = require("./user.controller");
const user_validation_1 = require("./user.validation");
const router = express_1.default.Router();
router.get('/', user_controller_1.UserController.getAllUser);
router.get('/:id', user_controller_1.UserController.getSingleUser);
router.patch('/:id', (0, middleware_1.default)(user_validation_1.UserValidation.UpdateUserZodSchema), user_controller_1.UserController.updateUser);
router.delete('/:id', user_controller_1.UserController.deleteUser);
exports.UserRouter = router;
