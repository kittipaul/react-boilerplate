/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from 'components/Header/index';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import MainPage from 'containers/MainPage/Loadable';
import GoalList from 'containers/GoalList/Loadable';

import AppWrapper from './AppWrapper';

export default function App() {
  return (
    <AppWrapper>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/goals" component={GoalList} />
        <Route component={NotFoundPage} />
      </Switch>
    </AppWrapper>
  );
}
