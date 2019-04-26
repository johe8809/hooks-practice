import createReducer from '../createRecucer';
import { SET_TITLE_APPBAR } from './types';

export const INITIAL_STATE_LAYOUT = {
  title: '',
};

const setTitleAppBar = (state, action) => {
  return {
    ...state,
    title: action.payload,
  };
};

export default createReducer(INITIAL_STATE_LAYOUT, {
  [SET_TITLE_APPBAR]: setTitleAppBar,
});
