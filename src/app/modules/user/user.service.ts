import { IUser } from './user.interface';
import { User } from './user.model';

const getAllUser = (): Promise<IUser[]> => {
  const data = User.where({});
  return data;
};

const getSingleUser = (id: string): Promise<IUser | null> => {
  const data = User.findById(id);
  return data;
};

const updateUser = (id: string, payload: IUser): Promise<IUser | null> => {
  const data = User.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return data;
};

const deleteUser = (id: string): Promise<IUser | null> => {
  const data = User.findByIdAndDelete(id);
  return data;
};

export const UserService = {
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
