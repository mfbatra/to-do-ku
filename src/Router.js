import { BrowserRouter, Route, Switch } from "react-router-dom";

import React from "react";

const CustomRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/todo">asdf</Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default CustomRouter;
