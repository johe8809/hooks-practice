import React, { useEffect, useContext, useMemo } from 'react';
import { StoreContext } from '../../flux';
import { setTitleAppBar } from '../../flux/layout/actions';

export default (props) => {
  const { layoutDispatch } = useContext(StoreContext);
  const PageComponent = props.component;

  useEffect(() => {
    layoutDispatch(setTitleAppBar(props.routeName));
  }, [props.routeName]);

  return useMemo(() => {
    return <PageComponent />;
  }, [props.routeName]);
};
