import { SET_TITLE_APPBAR } from './types';

export const setTitleAppBar = (title) => ({
  type: SET_TITLE_APPBAR,
  payload: title,
});
