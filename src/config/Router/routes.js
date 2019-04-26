import Home from '../../pages/Home';
import { CreateUser, ListUsers } from '../../pages/User';

export const ROUTES = [
  {
    path: '/',
    exact: true,
    name: 'Home',
    component: Home,
  },
  {
    path: '/users',
    exact: true,
    name: 'Listado de usuarios',
    component: ListUsers,
  },
  {
    path: '/user',
    exact: true,
    name: 'Crear nuevo usuario',
    component: CreateUser,
  },
];
