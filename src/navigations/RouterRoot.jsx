import React from "react";
import { Switch, Route } from "react-router-dom";
import Components from "@coc/components";
import routers from "@coc/routers";

const getSwitchComponent = (
  <Switch>
    {routers.all().map(({ path, component: C, exact, ...rest }, key) => (
      <Route
        path={path}
        key={key}
        exact={exact}
        render={props => <C {...props} {...rest} />}
      />
    ))}
  </Switch>
);

function RouterRoot() {
  return (
    <Components.Layout>
      <Components.Sidebar routers={routers.all()} />
      <div className="col-md-9 ml-sm-auto col-lg-10 px-4">
        <Components.Navbar />
        {getSwitchComponent}
      </div>
    </Components.Layout>
  );
}

export default RouterRoot;
