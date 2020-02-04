import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

import Layout from 'components/Layout';
import Loading from 'views/Loading';
import PrivateRoute from 'components/PrivateRoute';

const Home = lazy(() => import('views/Home'));
const Login = lazy(() => import('views/Login'));
const Logout = lazy(() => import('views/Logout'));

export default function () {
  return (
    <Suspense fallback={<Loading />}>
      <Route exact path="/login" component={Login} />
      <Route exact path="/logout" component={Logout} />
      <Layout>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/table/:tableName" component={Home} />
      </Layout>
    </Suspense>
  )
}
