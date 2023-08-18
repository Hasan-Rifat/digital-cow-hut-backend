import express from 'express';
import validateRequest from '../../middleware/middleware';
import { orderController } from './order.controller';
import { OrderValidation } from './order.validation';

const router = express.Router();

router.get('/', orderController.getAllOrders);
router.post(
  '/',
  validateRequest(OrderValidation.createOrderZodSchema),
  orderController.createOrder
);
router.get('/:id', orderController.getOrder);

export const OrderRouter = router;
