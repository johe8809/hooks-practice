import React from 'react';
import RouterApp from './config/Router';
import withRoot from './WithRoot';
import Store from './flux';

const App = () => {
  return (
    <Store>
      <RouterApp />;
    </Store>
  );
};

export default withRoot(App);
