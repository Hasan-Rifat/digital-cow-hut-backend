import express from 'express';
import { AuthRouter } from '../modules/auth/auth.router';
import { CowRouter } from '../modules/cow/cow.router';
import { OrderRouter } from '../modules/order/order.router';
import { UserRouter } from '../modules/user/user.router';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRouter,
  },
  {
    path: '/users',
    route: UserRouter,
  },
  {
    path: '/cows',
    route: CowRouter,
  },
  {
    path: '/orders',
    route: OrderRouter,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
