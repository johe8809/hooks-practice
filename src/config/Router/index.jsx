import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Page from '../../components/PageWrapper';
import Layout from '../../layouts/Main';
import { ROUTES } from './routes';

export default () => {
  return (
    <Router>
      <Layout>
        <Switch>
          {ROUTES.map((route, index) => (
            <Route
              key={() => index.toString()}
              path={route.path}
              exact={route.exact}
              render={(props) => <Page {...props} component={route.component} routeName={route.name} />}
            />
          ))}
        </Switch>
      </Layout>
    </Router>
  );
};
