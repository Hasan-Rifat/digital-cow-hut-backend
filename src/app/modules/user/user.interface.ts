import { Model } from 'mongoose';

type UserName = {
  firstName: string;
  lastName: string;
};

type role = 'admin' | 'user';

export type IUser = {
  password: string;
  role: role;
  name: UserName;
  phoneNumber: string;
  address: string;
  budget: number;
  income: number;
};

export type UserModel = Model<IUser, Record<string, unknown>>;
