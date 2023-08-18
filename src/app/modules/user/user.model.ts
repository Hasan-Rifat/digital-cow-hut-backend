import { Schema, model } from 'mongoose';
import { role } from './user.constants';
import { IUser, UserModel } from './user.interface';

const userSchema = new Schema<IUser>(
  {
    password: { type: String, required: true },
    role: {
      required: true,
      type: String,
      enum: role,
    },
    name: {
      required: true,
      type: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
      },
    },
    phoneNumber: { type: String, required: true },
    address: {
      required: true,
      type: String,
    },
    budget: {
      required: true,
      type: Number,
    },
    income: {
      required: true,
      type: Number,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const User = model<IUser, UserModel>('User', userSchema);
