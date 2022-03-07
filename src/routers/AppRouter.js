import React, { useEffect, useReducer, useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import ChatBot from "../pages/ChatBot";
import HomePage from "../pages/HomePage";

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/chat" component={ChatBot} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
};
