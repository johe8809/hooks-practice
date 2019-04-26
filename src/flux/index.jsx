import React, { createContext, useReducer } from 'react';
import layoutReducer, { INITIAL_STATE_LAYOUT } from './layout/reducer';
import userReducer, { INITIAL_STATE_USER } from './user/reducer';

export const StoreContext = createContext({});

export default (props) => {
  const [layoutState, layoutDispatch] = useReducer(layoutReducer, INITIAL_STATE_LAYOUT);
  const [userState, userDispatch] = useReducer(userReducer, INITIAL_STATE_USER);
  return (
    <StoreContext.Provider
      value={{
        state: { layout: layoutState, user: userState },
        layoutDispatch,
        userDispatch,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};
