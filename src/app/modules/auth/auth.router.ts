import express from 'express';
import validateRequest from '../../middleware/middleware';
import { AuthController } from './auth.controller';
import { AuthValidationSchema } from './auth.validation';

const router = express.Router();

router.post(
  '/signup',
  validateRequest(AuthValidationSchema.CreateUserZodSchema),
  AuthController.createUser
);

export const AuthRouter = router;
