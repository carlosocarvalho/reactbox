import React from 'react';
import {Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'
import RouterRoot from './navigations/RouterRoot';


function App() {
  return (
   <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard" component={RouterRoot}></Route>
          <Redirect from="/" to="/dashboard/home" />  
        </Switch>
      </BrowserRouter>
   </React.Fragment>
  );
}

export default App;
