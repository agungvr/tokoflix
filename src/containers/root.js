import React, { lazy } from 'react';
import {
  Switch, Route, Redirect
} from 'react-router-dom';

const Home = lazy(() => import('./home'));
const Details = lazy(() => import('./details'));

const PageComponent = () => (
  <Switch>
    <Route exact path={'/'} component={Home}/>
    <Route exact path={'/home'} component={Home}/>
    <Route exact path={'/movie/:id'} component={Details}/>
    <Redirect to={'/'}/>
  </Switch>
);


export default PageComponent;
