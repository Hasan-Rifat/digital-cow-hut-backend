import { IUser } from '../user/user.interface';
import { User } from '../user/user.model';

const createUser = (user: IUser): Promise<IUser> => {
  const data = User.create(user);
  return data;
};

export const AuthService = {
  createUser,
};
