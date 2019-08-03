import React from 'react';

import {Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'
import RouterRoot from './navigations/RouterRoot';
import Views from '@coc/views'


function App() {
  return (
   <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard" component={RouterRoot}></Route>
         
        </Switch>
      </BrowserRouter>
   </React.Fragment>
  );
}

export default App;
