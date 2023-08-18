"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_router_1 = require("../modules/auth/auth.router");
const cow_router_1 = require("../modules/cow/cow.router");
const order_router_1 = require("../modules/order/order.router");
const user_router_1 = require("../modules/user/user.router");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/auth',
        route: auth_router_1.AuthRouter,
    },
    {
        path: '/users',
        route: user_router_1.UserRouter,
    },
    {
        path: '/cows',
        route: cow_router_1.CowRouter,
    },
    {
        path: '/orders',
        route: order_router_1.OrderRouter,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
