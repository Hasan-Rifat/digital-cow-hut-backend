import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IUser } from '../user/user.interface';
import { AuthService } from './auth.service';

const createUser = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.createUser(req.body);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User successfully !',
    data: result,
  });
});

export const AuthController = {
  createUser,
};
