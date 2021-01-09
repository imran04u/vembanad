import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./../client_home/Home";
const Routes = () => {
  return (
    <Fragment>
        <NavBar />
        <Switch>
          <Route path="/" component={ Home } exact />
        </Switch>
      </Fragment>
  );
};

export default Routes;