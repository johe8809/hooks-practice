import { CREATE_USER } from './types';

export const createUser = (data) => {
  return {
    type: CREATE_USER,
    payload: data,
  };
};
