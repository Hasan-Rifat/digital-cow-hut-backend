"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CowRouter = void 0;
const express_1 = __importDefault(require("express"));
const middleware_1 = __importDefault(require("../../middleware/middleware"));
const cow_controller_1 = require("./cow.controller");
const cow_validation_1 = require("./cow.validation");
const router = express_1.default.Router();
router.get('/', cow_controller_1.CowController.getAllCows);
router.post('/', (0, middleware_1.default)(cow_validation_1.CowValidationSchema.createCowZodSchema), cow_controller_1.CowController.createCow);
router.get('/:id', cow_controller_1.CowController.singleCow);
router.patch('/:id', (0, middleware_1.default)(cow_validation_1.CowValidationSchema.updateCowZodSchema), cow_controller_1.CowController.updateCow);
router.delete('/:id', cow_controller_1.CowController.deleteCow);
exports.CowRouter = router;
