import createReducer from '../createRecucer';
import { CREATE_USER } from './types';

export const INITIAL_STATE_USER = {
  data: null,
};

const createUser = (state, action) => {
  return {
    ...state,
    data: action.payload,
  };
};

export default createReducer(INITIAL_STATE_USER, {
  [CREATE_USER]: createUser,
});
