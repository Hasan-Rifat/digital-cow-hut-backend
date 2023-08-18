"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRouter = void 0;
const express_1 = __importDefault(require("express"));
const middleware_1 = __importDefault(require("../../middleware/middleware"));
const order_controller_1 = require("./order.controller");
const order_validation_1 = require("./order.validation");
const router = express_1.default.Router();
router.get('/', order_controller_1.orderController.getAllOrders);
router.post('/', (0, middleware_1.default)(order_validation_1.OrderValidation.createOrderZodSchema), order_controller_1.orderController.createOrder);
router.get('/:id', order_controller_1.orderController.getOrder);
exports.OrderRouter = router;
