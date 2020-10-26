import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../auth/Login';
import ChangePassword from '../auth/ChangePassword';
import Register from '../auth/Register';
import Alert from '../layout/Alert';
import NotFound from '../layout/NotFound';
import Products from '../Products';
import ProductDetails from '../ProductDetails';
import ProductForm from '../ProductForm';

import PrivateRoute from '../routes/PrivateRoute';
import AdminPrivateRoute from '../routes/AdminPrivateRoute';

const Routes = () => {
  return (
    <section class='container'>
      <Alert />
      <Switch>
        <Route path='/login' component={Login} />
        <AdminPrivateRoute path='/register' component={Register} />
        <PrivateRoute path='/change-password' component={ChangePassword} />
        <AdminPrivateRoute path='/product' component={ProductForm} />
        <Route exact path='/' component={Products} />
        <Route path='/product-details/:id' component={ProductDetails} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
