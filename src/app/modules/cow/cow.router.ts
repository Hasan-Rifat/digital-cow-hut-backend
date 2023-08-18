import express from 'express';
import validateRequest from '../../middleware/middleware';
import { CowController } from './cow.controller';
import { CowValidationSchema } from './cow.validation';

const router = express.Router();

router.get('/', CowController.getAllCows);
router.post(
  '/',
  validateRequest(CowValidationSchema.createCowZodSchema),
  CowController.createCow
);
router.get('/:id', CowController.singleCow);
router.patch(
  '/:id',
  validateRequest(CowValidationSchema.updateCowZodSchema),
  CowController.updateCow
);
router.delete('/:id', CowController.deleteCow);

export const CowRouter = router;
