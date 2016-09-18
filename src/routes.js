import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Graphic1 from './components/graphics/Graphic1';
import Graphic2 from './components/graphics/Graphic2';
import ListPage from './components/list/ListPage';
import ManageListPage from './components/list/ManageListPage'; //eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ListPage} />
    <Route path="list" component={ListPage} />
    <Route path="addItem" component={ManageListPage} />
    <Route path="Graphic1" component={Graphic1} />
    <Route path="Graphic2" component={Graphic2} />
  </Route>
);
