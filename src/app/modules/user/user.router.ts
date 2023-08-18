import express from 'express';
import validateRequest from '../../middleware/middleware';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';

const router = express.Router();

router.get('/', UserController.getAllUser);
router.get('/:id', UserController.getSingleUser);
router.patch(
  '/:id',
  validateRequest(UserValidation.UpdateUserZodSchema),
  UserController.updateUser
);
router.delete('/:id', UserController.deleteUser);

export const UserRouter = router;
