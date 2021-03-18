import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import RoomSelector from './RoomSelector';
import App from './App';
import NotFound from './NotFound.js';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={RoomSelector} />
      <Route path = '/room/:roomId' component={App} />
      <Route component = {NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;